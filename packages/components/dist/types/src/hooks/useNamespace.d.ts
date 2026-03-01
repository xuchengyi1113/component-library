export declare const defaultNamespace = "my";
export declare const useNamespace: (block: string) => {
    b: () => string;
    e: (element: string) => string;
    m: (modifier: string) => string;
    is: (name: string, state: boolean | undefined) => string;
};
