'use client';

import { useABI } from '@/hooks/use-abi';
import { ABIInput } from '@/components/abi/abi-input';
import { FunctionList } from '@/components/abi/function-list';
import { EventList } from '@/components/abi/event-list';
import { SelectedItems } from '@/components/abi/selected-items';

export default function ABITestPage() {
  const {
    abi,
    functions,
    events,
    selectedItems,
    error,
    loadABI,
    toggleFunction,
    toggleEvent,
    clearSelections,
    isFunctionSelected,
    isEventSelected,
  } = useABI();

  const selectedFunctionNames = new Set(
    selectedItems.filter(item => item.type === 'function').map(item => item.name)
  );
  const selectedEventNames = new Set(
    selectedItems.filter(item => item.type === 'event').map(item => item.name)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">SmoothIndexer</h1>
          <p className="text-gray-600 mt-2">Parse and select ABI functions and events</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Load ABI</h2>
          <ABIInput onABILoad={loadABI} error={error} />
        </div>

        {abi && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">
                Functions ({functions.length})
              </h2>
              <FunctionList
                functions={functions}
                selectedNames={selectedFunctionNames}
                onToggle={toggleFunction}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">
                Events ({events.length})
              </h2>
              <EventList
                events={events}
                selectedNames={selectedEventNames}
                onToggle={toggleEvent}
              />
            </div>
          </div>
        )}

        {selectedItems.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Selected Items</h2>
            <SelectedItems items={selectedItems} onClear={clearSelections} />
          </div>
        )}
      </div>
    </div>
  );
}

