/// <reference types="react" />
import { useSafeCallback, useIsMounted } from "./useSafe";
import { useConsole } from "./useConsole";
import { useIf } from "./useIf";
import { useContextReducer, createSafeCtx } from "./context-utils";
import { useDebounce, useTimeout } from "./misc";
export default function UtilityHooks(): {
    useLZObject: ({ output }: {
        output: "uint8array" | "utf16" | "base64" | "uri";
    }) => ((value: {
        [key: string]: any;
    }) => any)[];
    useSafeEffect: typeof import("react").useLayoutEffect;
    useSafeCallback: typeof useSafeCallback;
    useIsMounted: typeof useIsMounted;
    useConsole: typeof useConsole;
    useIf: typeof useIf;
    useTimeout: typeof useTimeout;
    useDebounce: typeof useDebounce;
    createSafeCtx: typeof createSafeCtx;
    useContextReducer: typeof useContextReducer;
};
