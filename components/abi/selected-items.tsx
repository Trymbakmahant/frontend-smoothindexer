'use client';

import type { SelectedItem } from '@/types/abi';

interface SelectedItemsProps {
  items: SelectedItem[];
  onClear: () => void;
}

export function SelectedItems({ items, onClear }: SelectedItemsProps) {
  if (items.length === 0) {
    return (
      <div className="text-gray-500 text-sm">No items selected</div>
    );
  }

  const functions = items.filter(item => item.type === 'function');
  const events = items.filter(item => item.type === 'event');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Selected ({items.length})
        </h3>
        <button
          onClick={onClear}
          className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
        >
          Clear All
        </button>
      </div>

      {functions.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Functions ({functions.length})
          </h4>
          <div className="flex flex-wrap gap-2">
            {functions.map((item) => (
              <span
                key={item.name}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-mono"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {events.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Events ({events.length})
          </h4>
          <div className="flex flex-wrap gap-2">
            {events.map((item) => (
              <span
                key={item.name}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-mono"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 p-4 bg-gray-50 rounded border">
        <h4 className="text-sm font-medium mb-2">Export JSON:</h4>
        <pre className="text-xs overflow-auto max-h-40 p-2 bg-white border rounded">
          {JSON.stringify(items, null, 2)}
        </pre>
      </div>
    </div>
  );
}

