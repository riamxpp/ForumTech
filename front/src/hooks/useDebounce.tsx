import { useRef } from "react";

export function useDebounce(fn: (...args: any) => void, delay: number) {
  const tempo = useRef<any>(null);

  function debounce(...args: any) {
    window.clearTimeout(tempo.current);

    tempo.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }
  return debounce;
}
