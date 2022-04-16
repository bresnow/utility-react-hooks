export declare const useLZObject: ({ output }: {
    output: "uint8array" | "utf16" | "base64" | "uri";
}) => ((value: {
    [key: string]: any;
}) => any)[];
