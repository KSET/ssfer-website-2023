import {FormikValues, useFormikContext} from "formik";
import {FC, useCallback, useEffect} from "react";
import {omit} from "lodash";


interface AutoSaveProps {
  delay?: number;
  onSubmit?: (v: FormikValues) => void;
}

const AutoSave: FC<AutoSaveProps> = ({delay = 300, onSubmit}) => {
  const {values, errors} = useFormikContext<FormikValues>();

  const onFormSubmit = useCallback(async () => {
    const v: FormikValues = omit(values, Object.keys(errors));
    if (onSubmit) onSubmit(v);
  }, [values, errors, onSubmit]);

  useEffect(() => {
    const timer = setTimeout(() => onFormSubmit(), delay);
    return () => clearTimeout(timer);
  }, [values, errors, delay, onFormSubmit]);

  return null;
};

export default AutoSave;