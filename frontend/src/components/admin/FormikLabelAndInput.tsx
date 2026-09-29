import {Stack, Typography} from "@mui/material";
import {Field} from "formik";
import FormikTextInput from "@/components/admin/FormikTextInput";
import React from "react";

interface Props {
  label: string;
  name: string;
  type: string;
}

export default function FormikLabelAndInput({label, name, type}: Props) {
  return (
    <Stack display={"inline-flex"} gap={{xs: "0.5rem", md: "2rem"}} direction={{xs: "column", md: "row"}}
           justifyContent={"space-between"}
           alignItems={"start"} maxWidth={"600px"} width={"100%"} mt={"1rem"}>
      <Typography variant={"subtitle1"} color={"primary"} width={"200px"}>{label}</Typography>
      <Field
        component={FormikTextInput}
        id={name}
        name={name}
        type={type}
      />
    </Stack>
  )
}