import type { ABI, ABIFunction, ABIEvent } from '@/types/abi';

/**
 * Validates ABI structure and returns detailed errors
 */
export interface ValidationError {
  item: string;
  message: string;
}

export function validateABI(abi: ABI): ValidationError[] {
  const errors: ValidationError[] = [];

  abi.forEach((item, index) => {
    if (!item.type) {
      errors.push({
        item: `Item ${index}`,
        message: 'Missing type field'
      });
      return;
    }

    if (item.type === 'function') {
      const fn = item as ABIFunction;
      if (!fn.name) {
        errors.push({
          item: `Function at index ${index}`,
          message: 'Function missing name'
        });
      }
      if (!Array.isArray(fn.inputs)) {
        errors.push({
          item: fn.name || `Function at index ${index}`,
          message: 'Function missing inputs array'
        });
      }
    }

    if (item.type === 'event') {
      const event = item as ABIEvent;
      if (!event.name) {
        errors.push({
          item: `Event at index ${index}`,
          message: 'Event missing name'
        });
      }
      if (!Array.isArray(event.inputs)) {
        errors.push({
          item: event.name || `Event at index ${index}`,
          message: 'Event missing inputs array'
        });
      }
    }
  });

  return errors;
}

