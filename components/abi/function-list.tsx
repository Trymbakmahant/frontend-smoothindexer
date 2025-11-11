'use client';

import type { ABIFunction } from '@/types/abi';
import { formatParameterType } from '@/lib/abi/parser';

interface FunctionListProps {
  functions: ABIFunction[];
  selectedNames: Set<string>;
  onToggle: (fn: ABIFunction) => void;
}

export function FunctionList({ functions, selectedNames, onToggle }: FunctionListProps) {
  if (functions.length === 0) {
    return (
      <div className="text-gray-500 text-sm">No functions found in ABI</div>
    );
  }

  return (
    <div className="space-y-2">
      {functions.map((fn, index) => {
        const isSelected = selectedNames.has(fn.name);
        return (
          <div
            key={`${fn.name}-${index}`}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              isSelected
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onToggle(fn)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold text-blue-600">{fn.name}</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                    {fn.stateMutability}
                  </span>
                  {isSelected && (
                    <span className="text-xs px-2 py-1 bg-blue-500 text-white rounded">
                      Selected
                    </span>
                  )}
                </div>
                
                {fn.inputs.length > 0 && (
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">Inputs:</span>
                    <div className="ml-4 mt-1 space-y-1">
                      {fn.inputs.map((input, i) => (
                        <div key={i} className="font-mono text-xs">
                          {input.name || `param${i}`}: {formatParameterType(input)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {fn.outputs.length > 0 && (
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">Outputs:</span>
                    <div className="ml-4 mt-1 space-y-1">
                      {fn.outputs.map((output, i) => (
                        <div key={i} className="font-mono text-xs">
                          {output.name || `return${i}`}: {formatParameterType(output)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

