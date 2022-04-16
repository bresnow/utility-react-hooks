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
export declare function useConsole<Arguments extends any[] = any>(): {
    assert: (condition?: boolean, ...args: Arguments) => {
        trace: (...args: any[]) => void;
    };
    clear: () => void;
    log: (...args: Arguments) => {
        trace: (...args: any[]) => void;
    };
    info: (...args: Arguments) => {
        trace: (...args: any[]) => void;
    };
    count: (label?: string) => void;
    countReset: (label?: string) => void;
    debug: (message?: any, ...data: any[]) => {
        trace: (...args: any[]) => void;
    };
    dir: (item?: any) => void;
    error: (...args: any[]) => {
        trace: (...args: any[]) => void;
    };
    group: (...args: any[]) => ({}: {}) => void;
    groupEnd: () => void;
    table: (tabularData?: any, properties?: string[]) => void;
    time: (label?: string) => void;
    timeEnd: (label?: string) => void;
    timeLog: (label?: string, ...data: any[]) => void;
    timeStamp: (label?: string) => void;
    trace: (...args: any[]) => void;
    warn: (...args: any[]) => {
        trace: (...args: any[]) => void;
    };
};
