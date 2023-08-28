import {FormikValues, useFormikContext} from "formik";
import {FC, useCallback, useEffect} from "react";
import {isEqual, omit} from "lodash";


interface AutoSaveProps {
  delay?: number;
  onSubmit?: (v: FormikValues) => void;
}

const AutoSave: FC<AutoSaveProps> = ({delay = 300, onSubmit}) => {
  const {values, errors, initialValues} = useFormikContext<FormikValues>();

  const isSameValueAsInitialValue = useCallback(async (v: FormikValues) =>
    isEqual(v, initialValues), [initialValues]);

  const onFormSubmit = useCallback(async () => {
    const v: FormikValues = omit(values, Object.keys(errors));
    if (onSubmit && !(await isSameValueAsInitialValue(v))) onSubmit(v);
  }, [values, errors, onSubmit, isSameValueAsInitialValue]);

  useEffect(() => {
    const timer = setTimeout(() => onFormSubmit(), delay);
    return () => clearTimeout(timer);
  }, [values, errors, delay, onFormSubmit]);

  return null;
};

export default AutoSave;