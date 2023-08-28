import AdminLayout from "@/components/admin/AdminLayout";
import {Box, Typography} from "@mui/material";
import React, {useCallback} from "react";
import {Form, Formik} from "formik";
import AutoSave from "@/components/admin/AutoSave";
import useAutosaveSubmit from "@/hooks/useAutosaveSubmit";
import FormikLabelAndInput from "@/components/admin/FormikLabelAndInput";
import {Stack} from "@mui/system";
import FormikImageUpload from "@/components/admin/FormikImageUpload";

export default function Naslovnica() {

  const onSubmit = useCallback(async (values: any) => {
    console.log(values);
    return true;
  }, []);

  const {autosaveSubmit} = useAutosaveSubmit(onSubmit);

  return (
    <AdminLayout>
      <Box m={"2rem"}>
        <Typography variant={"h4"} color={"primary"} sx={{fontWeight: "bold"}}>Naslovnica</Typography>

        <Typography variant={"h5"} color={"primary"} sx={{fontWeight: "bold"}} mt={"3rem"}>Tekstovi</Typography>

        <Formik initialValues={{oNama: "", sekcijeOpis: "", onNameNaslov: "", slika: undefined}}
                onSubmit={autosaveSubmit}>
          {({submitForm, setFieldValue}) => (
            <Form>
              <Stack direction={"column"} justifyContent={"space-between"} alignItems={"start"}>
                <FormikLabelAndInput label={"O Nama"} name={"oNama"} type={"text"}/>
                <FormikLabelAndInput label={"Sekcije Opis"} name={"sekcijeOpis"} type={"text"}/>
                <FormikLabelAndInput label={"O Nama Naslov"} name={"onNameNaslov"} type={"text"}/>
                <FormikImageUpload label={"Slika"} name={"slika"}
                                   onChange={(event) => {
                                     if (!event.currentTarget.files) return;
                                     setFieldValue("slika", event.currentTarget.files[0]);
                                   }}/>
              </Stack>
              <AutoSave onSubmit={submitForm}/>
            </Form>
          )}
        </Formik>

      </Box>
    </AdminLayout>
  )
}