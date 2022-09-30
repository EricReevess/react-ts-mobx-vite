import React, { useRef } from 'react';

export type useLRUReturn<T> = [
  lruArray: Record<React.Key, T>[],
  get: (key: React.Key) => T | void,
  set: (key: React.Key, value: T) => void,
  lruCacheKeys: Array<React.Key>,
]

export function useLRU<T>(cacheSize = 5): useLRUReturn<T> {
  const lruCache = useRef<Map<React.Key, T>>(new Map());
  const lruCacheMap = lruCache.current;

  function get(key: React.Key): T | void {
    if (!lruCacheMap.has(key)) {
      return;
    }

    const value = lruCacheMap.get(key);

    if (!value) return;

    lruCacheMap.delete(key);
    lruCacheMap.set(key, value);

    return value;
  }

  function set(key: React.Key, value: T): void {
    if (lruCacheMap.has(key)) {
      lruCacheMap.delete(key);
    }
    lruCacheMap.set(key, value);

    if (lruCacheMap.size > cacheSize) {
      const delKey = lruCacheMap.keys().next().value;
      lruCacheMap.delete(delKey);
    }
  }

  function getLruArray(): Record<React.Key, any>[] {
    return [...lruCacheMap].map(([key, value]) => ({
      key,
      value
    }));

  }

  return [
    getLruArray(),
    get,
    set,
    [...lruCacheMap.keys()],
  ];

} 