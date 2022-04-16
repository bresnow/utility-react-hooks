import React from "react";
import { useSafeCallback } from "./useSafe";
/**
 * Hook to use console.log only if NODE_ENV === 'development'
 * Naming the function to something shorter like "_" is a good idea for speed and when removing from the code...
 * {assert, info, log, warn and error} have a trace() method to print the location in code
 * @example
 * ``````
 * import { useConsole } from "useConsole";
 * const _ = useConsole();
 * _.log("Hello World").trace();
 */
export function useConsole<Arguments extends any[] = any>() {
    let info = useSafeCallback((...args: Arguments) => {
        if (process.env.NODE_ENV !== 'production')
            console.info(...args)
        return { trace }
    }); let assert = useSafeCallback((condition?: boolean, ...args: Arguments) => {
        if (process.env.NODE_ENV !== 'production')
            console.assert(condition && condition, ...args)
        return { trace }
    }); let clear = useSafeCallback(() => {
        if (process.env.NODE_ENV !== 'production')
            console.clear()
    }); let log = useSafeCallback((...args: Arguments) => {
        if (process.env.NODE_ENV !== 'production')
            console.log(...args)
        return { trace }
    });
    let count = useSafeCallback((label?: string) => {
        if (process.env.NODE_ENV !== 'production')
            console.count(label)
    })
    let countReset = useSafeCallback((label?: string) => {
        if (process.env.NODE_ENV !== 'production')
            console.countReset(label)
    });
    let debug = useSafeCallback((message?: any, ...data: any[]) => {
        if (process.env.NODE_ENV !== 'production')
            console.debug(message, ...data)
        return { trace }
    });
    let dir = useSafeCallback((item?: any) => {
        if (process.env.NODE_ENV !== 'production')
            console.dir(item)
    });
    let error = useSafeCallback((...data: any[]) => {
        if (process.env.NODE_ENV !== 'production') {
            console.error(...data)
            return { trace }
        }
    });

    let group = useSafeCallback((...data: any[]) => ({ }) => {
        if (process.env.NODE_ENV !== 'production')
            console.groupCollapsed(...data)
        groupEnd()
    });
    let groupEnd = useSafeCallback(() => {
        if (process.env.NODE_ENV !== 'production')
            console.groupEnd()
    });
    let table = useSafeCallback((tabularData?: any, properties?: string[]) => {
        if (process.env.NODE_ENV !== 'production')
            console.table(tabularData, properties)
    });
    let time = useSafeCallback((label?: string) => {
        if (process.env.NODE_ENV !== 'production')
            console.time(label)
    });
    let timeEnd = useSafeCallback((label?: string) => {
        if (process.env.NODE_ENV !== 'production')
            console.timeEnd(label)
    });
    let timeLog = useSafeCallback((label?: string, ...data: any[]) => {
        if (process.env.NODE_ENV !== 'production')
            console.timeLog(label, ...data)
    });
    let timeStamp = useSafeCallback((label?: string) => {
        if (process.env.NODE_ENV !== 'production')
            console.timeStamp(label)
    });
    let trace = useSafeCallback((...data: any[]) => {
        if (process.env.NODE_ENV !== 'production')
            console.trace(...data)
    });
    let warn = useSafeCallback((...data: any[]) => {
        if (process.env.NODE_ENV !== 'production')
            console.warn(...data)
        return { trace }
    });

    return {
        assert,
        clear,
        log,
        info,
        count,
        countReset,
        debug,
        dir,
        error,
        group,
        groupEnd,
        table,
        time,
        timeEnd,
        timeLog,
        timeStamp,
        trace,
        warn
    }
}