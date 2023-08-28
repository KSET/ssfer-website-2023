import {fieldToInputBase, InputBaseProps} from "formik-mui";
import {Input} from "@mui/material";


export default function FormikTextInput(props: InputBaseProps) {
  return <Input {...fieldToInputBase(props)} disabled={false} fullWidth={true}/>;

}