import {TextField} from "@mui/material";
import {fieldToTextField, TextFieldProps} from "formik-mui";
import React from "react";


export default function FormixTextArea(props: TextFieldProps) {
  return <TextField id="filled-textarea" placeholder="Placeholder" multiline maxRows={4} fullWidth={true}
                    variant="filled" {...fieldToTextField(props)} disabled={false}
  />;
}