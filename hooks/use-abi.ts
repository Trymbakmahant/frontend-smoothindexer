'use client';

import { useState, useCallback } from 'react';
import type { ABI, ABIFunction, ABIEvent, SelectedItem } from '@/types/abi';
import { parseABI, getFunctions, getEvents } from '@/lib/abi/parser';
import { validateABI } from '@/lib/abi/validator';

export function useABI() {
  const [abi, setABI] = useState<ABI | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

  const loadABI = useCallback((jsonString: string) => {
    try {
      setError(null);
      const parsed = parseABI(jsonString);
      const validationErrors = validateABI(parsed);
      
      if (validationErrors.length > 0) {
        setError(`Validation errors: ${validationErrors.map(e => e.message).join(', ')}`);
        return;
      }
      
      setABI(parsed);
      setSelectedItems([]); // Reset selections when new ABI is loaded
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load ABI');
      setABI(null);
    }
  }, []);

  const toggleFunction = useCallback((fn: ABIFunction) => {
    setSelectedItems(prev => {
      const exists = prev.find(item => item.type === 'function' && item.name === fn.name);
      if (exists) {
        return prev.filter(item => !(item.type === 'function' && item.name === fn.name));
      }
      return [...prev, { type: 'function', name: fn.name, item: fn }];
    });
  }, []);

  const toggleEvent = useCallback((event: ABIEvent) => {
    setSelectedItems(prev => {
      const exists = prev.find(item => item.type === 'event' && item.name === event.name);
      if (exists) {
        return prev.filter(item => !(item.type === 'event' && item.name === event.name));
      }
      return [...prev, { type: 'event', name: event.name, item: event }];
    });
  }, []);

  const clearSelections = useCallback(() => {
    setSelectedItems([]);
  }, []);

  const functions = abi ? getFunctions(abi) : [];
  const events = abi ? getEvents(abi) : [];

  return {
    abi,
    functions,
    events,
    selectedItems,
    error,
    loadABI,
    toggleFunction,
    toggleEvent,
    clearSelections,
    isFunctionSelected: (name: string) => selectedItems.some(item => item.type === 'function' && item.name === name),
    isEventSelected: (name: string) => selectedItems.some(item => item.type === 'event' && item.name === name),
  };
}

