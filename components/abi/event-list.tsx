'use client';

import type { ABIEvent } from '@/types/abi';
import { formatParameterType } from '@/lib/abi/parser';

interface EventListProps {
  events: ABIEvent[];
  selectedNames: Set<string>;
  onToggle: (event: ABIEvent) => void;
}

export function EventList({ events, selectedNames, onToggle }: EventListProps) {
  if (events.length === 0) {
    return (
      <div className="text-gray-500 text-sm">No events found in ABI</div>
    );
  }

  return (
    <div className="space-y-2">
      {events.map((event, index) => {
        const isSelected = selectedNames.has(event.name);
        return (
          <div
            key={`${event.name}-${index}`}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              isSelected
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onToggle(event)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold text-purple-600">{event.name}</span>
                  {event.anonymous && (
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">anonymous</span>
                  )}
                  {isSelected && (
                    <span className="text-xs px-2 py-1 bg-purple-500 text-white rounded">
                      Selected
                    </span>
                  )}
                </div>
                
                {event.inputs.length > 0 && (
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">Parameters:</span>
                    <div className="ml-4 mt-1 space-y-1">
                      {event.inputs.map((input, i) => (
                        <div key={i} className="font-mono text-xs">
                          {input.indexed && <span className="text-purple-600">[indexed]</span>}{' '}
                          {input.name || `param${i}`}: {formatParameterType(input)}
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

