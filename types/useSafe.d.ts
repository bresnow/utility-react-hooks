import React from "react";
/**
 * Only uses useLayoutEffect when window is available
 */
export declare const useSafeEffect: typeof React.useLayoutEffect;
/**
 *
 * @param callback
 * @returns
 */
export declare function useSafeCallback<Arguments extends Array<any> = any[], ReturnValue = any>(callback: (...args: Arguments) => ReturnValue): (...args: Arguments) => ReturnValue;
export declare const useSafeReducer: (reducer: any, initialState: any) => [any, Function];
export declare function useIsMounted(): React.MutableRefObject<boolean>;
