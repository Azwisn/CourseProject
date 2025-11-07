import { useRef } from "react";
import debounce from "lodash.debounce";

export function useAutosave<T extends (...args: any[]) => Promise<void>>(saveFn: T, delay = 8000) {
    const ref = useRef(saveFn);
    ref.current = saveFn;
    const debounced = debounce((...args: any[]) => ref.current(...args), delay);
    return debounced;
}
