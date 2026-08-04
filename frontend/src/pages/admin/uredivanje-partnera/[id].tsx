import AdminLayout from "@/components/admin/AdminLayout";
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import React from "react";
import {Form, Formik} from "formik";
import useAutosaveSubmit from "@/hooks/useAutosaveSubmit";
import FormikLabelAndInput from "@/components/admin/FormikLabelAndInput";
import FormikImageUpload from "@/components/admin/FormikImageUpload";
import FormikLabelAndCheckbox from "@/components/admin/DodavanjeKorisnika/FormikLabelAndCheckbox";
import FormikDropdownSelectDragAndDrop from "@/components/admin/FormikDropdownSelectDragAndDrop";
import AutoSave from "@/components/admin/AutoSave";
import DeleteIcon from "@mui/icons-material/Delete";

const EXAMPLE_PROJECTS = [
  {
    id: "1",
    name: "Projekt 1",
    selected: false
  },
  {
    id: "2",
    name: "Projekt 2",
    selected: true
  },
  {
    id: "3",
    name: "Projekt 3",
    selected: false
  },
  {
    id: "4",
    name: "Projekt 4",
    selected: false
  },
  {
    id: "5",
    name: "Projekt 5",
    selected: false
  }
];

const UredivanjePartnera = () => {
  const onSubmit = (values: any) => {
    return;
  }

  const autosaveSubmit = useAutosaveSubmit(onSubmit);

  return (
    <AdminLayout>
      <Typography m={"2rem"} variant={"h4"}>Uređivanje partnera</Typography>
      <Formik initialValues={{
        imePartnera: "",
        logotip: undefined,
        vidljivo: true,
        strateski: true,
        link: "",
        projekti: EXAMPLE_PROJECTS
      }}
              onSubmit={autosaveSubmit}>
        {({submitForm}) => (
          <Form>
            <Stack direction={"column"} justifyContent={"space-between"} alignItems={"start"}>
              <Box m={"2rem"}>
                <FormikLabelAndInput label={"Ime partnera"} name={"imePartnera"} type={"text"}/>
                <FormikImageUpload label={"Logotip"} name={"logotip"}/>
                <FormikLabelAndCheckbox label={"Vidljivo"} name={"vidljivo"}/>
                <FormikLabelAndCheckbox label={"Strateški"} name={"strateski"}/>
                <FormikLabelAndInput label={"Link"} name={"link"} type={"text"}/>
                <Box>
                  <Stack display={"inline-flex"} gap={"2rem"} direction={{xs: "column", md: "row"}}
                         justifyContent={"space-between"}
                         alignItems={"start"} maxWidth={"600px"} width={"100%"} mt={"2rem"}>
                    <Typography variant={"subtitle1"} color={"primary"} width={"200px"}>{"Suroganizatori"}</Typography>
                    <FormikDropdownSelectDragAndDrop name={"projekti"} label={"Projekti"}/>
                  </Stack>
                </Box>

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

export default UredivanjePartnera;