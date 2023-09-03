import {Stack, Typography} from "@mui/material";
import {Field} from "formik";
import React from "react";
import {Switch} from "formik-mui";

interface Props {
  label: string;
  name: string;
  type?: string;
}

const FormikLabelAndSwitch = ({label, name, type}: Props) => (
  <Stack display={"inline-flex"} gap={{xs: "0.5rem", md: "2rem"}} direction={{xs: "column", md: "row"}}
         justifyContent={"flex-start"}
         alignItems={"start"} maxWidth={"600px"} width={"100%"} mt={"1rem"}>
    <Typography variant={"subtitle1"} color={"primary"} width={"200px"}>{label}</Typography>
    <Field
      component={Switch}
      id={name}
      name={name}
      type={type ?? "checkbox"}
    />
  </Stack>
)

export default FormikLabelAndSwitch;