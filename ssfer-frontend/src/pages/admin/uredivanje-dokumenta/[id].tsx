import AdminLayout from "@/components/admin/AdminLayout";
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import {Form, Formik} from "formik";
import FormikLabelAndInput from "@/components/admin/FormikLabelAndInput";
import FormikImageUpload from "@/components/admin/FormikImageUpload";
import FormikLabelAndCheckbox from "@/components/admin/DodavanjeKorisnika/FormikLabelAndCheckbox";
import AutoSave from "@/components/admin/AutoSave";
import React from "react";
import useAutosaveSubmit from "@/hooks/useAutosaveSubmit";
import DeleteIcon from "@mui/icons-material/Delete";


const UredivanjeDokumenta = () => {
  const onSubmit = (values: any) => {
    console.log(values);
    return;
  }

  const autosaveSubmit = useAutosaveSubmit(onSubmit);

  return (
    <AdminLayout>
      <Typography m={"2rem"} variant={"h4"}>Uređivanje dokumenta</Typography>
      <Formik initialValues={{
        imeDokumenta: "",
        fotografija: undefined,
        vidljivo: true,
        dokument: undefined
      }}
              onSubmit={autosaveSubmit}>
        {({submitForm}) => (
          <Form>
            <Stack direction={"column"} justifyContent={"space-between"} alignItems={"start"}>
              <Box m={"2rem"}>
                <FormikLabelAndInput label={"Ime dokumenta"} name={"imeDokumenta"} type={"text"}/>
                <FormikImageUpload label={"Fotografija"} name={"fotografija"}/>
                <FormikLabelAndCheckbox label={"Vidljivo"} name={"vidljivo"}/>
                <FormikImageUpload label={"Dokument"} name={"dokument"} showImage={false} accept={"application/pdf"}
                                   showName={true}/>
              </Box>
              <Divider sx={{width: "100%", mt: "1rem", mb: "2rem"}}/>
              <Stack direction={{xs: "column", md: "row"}} justifyContent={"flex-start"} alignItems={"center"}
                     ml={"2rem"} mb={"2rem"}
                     gap={{xs: "1rem", md: "10rem"}}>
                <Button variant={"contained"} color={"primary"} onClick={submitForm}>Spremi</Button>
                <Button variant={"outlined"} color={"primary"}><DeleteIcon/></Button>
              </Stack>
            </Stack>
            <AutoSave onSubmit={submitForm}/>
          </Form>
        )}
      </Formik>
    </AdminLayout>
  )
}

export default UredivanjeDokumenta;