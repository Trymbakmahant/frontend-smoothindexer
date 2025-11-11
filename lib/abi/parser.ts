import type { ABI, ABIItem, ABIFunction, ABIEvent } from '@/types/abi';

/**
 * Validates if the input is a valid ABI
 */
export function isValidABI(input: unknown): input is ABI {
  if (!Array.isArray(input)) return false;
  
  return input.every(item => 
    typeof item === 'object' && 
    item !== null && 
    'type' in item &&
    typeof item.type === 'string'
  );
}

/**
 * Parses ABI from JSON string
 */
export function parseABI(jsonString: string): ABI {
  try {
    const parsed = JSON.parse(jsonString);
    if (!isValidABI(parsed)) {
      throw new Error('Invalid ABI structure');
    }
    return parsed;
  } catch (error) {
    throw new Error(`Failed to parse ABI: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Extracts all functions from ABI
 */
export function getFunctions(abi: ABI): ABIFunction[] {
  return abi.filter((item): item is ABIFunction => item.type === 'function');
}

/**
 * Extracts all events from ABI
 */
export function getEvents(abi: ABI): ABIEvent[] {
  return abi.filter((item): item is ABIEvent => item.type === 'event');
}

/**
 * Gets function by name
 */
export function getFunctionByName(abi: ABI, name: string): ABIFunction | undefined {
  return getFunctions(abi).find(fn => fn.name === name);
}

/**
 * Gets event by name
 */
export function getEventByName(abi: ABI, name: string): ABIEvent | undefined {
  return getEvents(abi).find(event => event.name === name);
}

/**
 * Formats parameter type for display
 */
export function formatParameterType(param: { type: string; components?: any[] }): string {
  if (param.components) {
    const components = param.components.map(c => `${c.name}: ${c.type}`).join(', ');
    return `${param.type}(${components})`;
  }
  return param.type;
}

