import {useMemo} from "react";
import {debounceAsync} from "@/utils/debounceAsync";


function useAutosaveSubmit<T>(onSubmit: (data: T) => void, delay: number = 1000) {


  const autosaveSubmit = useMemo(() => {
    return debounceAsync(onSubmit, delay);
  }, [delay, onSubmit]);

  return {autosaveSubmit};
}

export default useAutosaveSubmit;