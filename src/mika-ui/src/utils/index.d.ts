export declare const withLockTime: <T extends unknown[]>(fn: (...args: T) => unknown, lockTime = 500) => (...args: T) => void;
export declare const useTimer: <T, >(callback: (arg: T) => unknown, interval: number) => [() => void, () => void, () => void];
export declare const isMobile: () => boolean;
export declare const debounce: <T extends unknown[]>(fn: (...args: T) => unknown, delay: number) => (...args: T) => void;
export declare const debounceAsync: <T extends unknown[]>(fn: (...args: T) => Promise<unknown>, delay: number) => (...args: T) => Promise<unknown>;
export declare const throttle: <T extends unknown[]>(fn: (...args: T) => unknown, delay: number) => (...args: T) => void;
export declare const withLock: <T extends unknown[]>(fn: (_lock: boolean, ...args: T) => unknown) => (...args: T) => void;
