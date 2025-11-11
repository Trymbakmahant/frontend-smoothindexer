'use client';

import { useRef } from 'react';
import { isValidABI } from '@/lib/abi/parser';

const extractABI = (value: unknown, seen = new Set<unknown>()): unknown[] | null => {
  if (value === null || value === undefined) return null;
  if (seen.has(value)) return null;

  if (Array.isArray(value)) {
    return isValidABI(value) ? value : null;
  }

  if (typeof value === 'object') {
    seen.add(value);
    const maybeABI = (value as Record<string, unknown>).abi;
    if (isValidABI(maybeABI)) {
      return maybeABI;
    }

    const metadata = (value as Record<string, unknown>).metadata;
    if (typeof metadata === 'string') {
      try {
        const parsedMetadata = JSON.parse(metadata);
        const metadataABI = extractABI(parsedMetadata, seen);
        if (metadataABI) return metadataABI;
      } catch {
        // ignore malformed metadata
      }
    } else if (metadata && typeof metadata === 'object') {
      const metadataABI = extractABI(metadata, seen);
      if (metadataABI) return metadataABI;
    }

    for (const child of Object.values(value as Record<string, unknown>)) {
      const result = extractABI(child, seen);
      if (result) return result;
    }
  }

  return null;
};

const normalizeABIInput = (raw: string): string => {
  try {
    const parsed = JSON.parse(raw);
    const abi = extractABI(parsed);
    if (abi) {
      return JSON.stringify(abi, null, 2);
    }
  } catch {
    // raw input wasn't JSON, fall back to original string
  }
  return raw;
};

interface ABIInputProps {
  onABILoad: (abi: string) => void;
  error?: string | null;
}

export function ABIInput({ onABILoad, error }: ABIInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const content = event.target?.result as string;
      const normalized = normalizeABIInput(content);
      onABILoad(normalized);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };
    reader.readAsText(file);
  };

  const handlePaste = () => {
    // Trigger paste handler after a short delay to ensure clipboard is ready
    setTimeout(() => {
      const text = textareaRef.current?.value || '';
      if (text.trim()) {
        onABILoad(normalizeABIInput(text));
      }
    }, 0);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
          id="abi-file-input"
        />
        <label
          htmlFor="abi-file-input"
          className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
        >
          Upload JSON File
        </label>
      </div>

      <div className="space-y-2">
        <label htmlFor="abi-textarea" className="block text-sm font-medium">
          Or paste ABI JSON:
        </label>
        <textarea
          ref={textareaRef}
          id="abi-textarea"
          placeholder='[{"type":"function","name":"transfer",...}]'
          className="w-full h-32 p-3 border rounded-md font-mono text-sm"
          onPaste={handlePaste}
        />
        <button
          onClick={() => {
            const text = textareaRef.current?.value || '';
            if (text.trim()) {
              onABILoad(normalizeABIInput(text));
            }
          }}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Parse ABI
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}

