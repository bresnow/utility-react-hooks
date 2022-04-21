/**
 * Hooks taken or heavily inspired from web dev simplified's useful React hooks video
 * https://github.com/WebDevSimplified/useful-custom-react-hooks
 */
import { useSafeEffect } from '../index';
import React from 'react';

export function useTimeout(callback: (args?: any) => any, delay: number) {
  const callbackRef = React.useRef(callback);
  const timeoutRef = React.useRef<any>();

  useSafeEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = React.useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = React.useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useSafeEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = React.useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

export function useDebounce(
  callback: (args?: any) => any,
  delay: number,
  dependencies: any,
) {
  const { reset, clear } = useTimeout(callback, delay);
  useSafeEffect(reset, [...dependencies, reset]);
  useSafeEffect(clear, []);
}

export function useEventListener(
  eventType: string,
  callback: (e: any) => void,
  element = window,
) {
  const callbackRef = React.useRef(callback);

  useSafeEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useSafeEffect(() => {
    if (element == null) return;
    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
