import React from "react";
/**
 * Only uses useLayoutEffect when window is available 
 */
export const useSafeEffect =
    typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

/**
 * 
 * @param callback 
 * @returns 
 */

export function useSafeCallback<
    Arguments extends Array<any> = any[],
    ReturnValue = any
>(callback: (...args: Arguments) => ReturnValue) {
    const isMounted = useIsMounted();
    return React.useCallback(
        (...args: Arguments) => (isMounted.current ? callback(...args) : void 0),
        [callback]
    );
}




export const useSafeReducer = (
    reducer: any,
    initialState: any
): [any, Function] => {
    const [state, dispatch] = React.useReducer<React.Reducer<any, any>>(
        reducer,
        initialState
    );
    const isMounted = useIsMounted();

    function safeDispatch(...args: any) {
        if (isMounted.current) {
            dispatch(args);
        }
    }

    return [state, safeDispatch];
};



export function useIsMounted() {
    const isMounted = React.useRef(false);
    useSafeEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
};