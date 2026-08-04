import {useMemo} from "react";
import {debounceAsync} from "@/utils/debounceAsync";


function useAutosaveSubmit<T>(onSubmit: (data: T) => void, delay: number = 1000) {


  return useMemo(() => {
    return debounceAsync(onSubmit, delay);
  }, [delay, onSubmit]);
}

export default useAutosaveSubmit;