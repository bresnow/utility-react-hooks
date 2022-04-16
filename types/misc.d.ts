export declare function useTimeout(callback: (args?: any) => any, delay: number): {
    reset: () => void;
    clear: () => void;
};
export declare function useDebounce(callback: (args?: any) => any, delay: number, dependencies: any): void;
