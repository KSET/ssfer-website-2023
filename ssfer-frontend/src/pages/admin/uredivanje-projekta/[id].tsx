import React, {useCallback} from 'react'
import AdminLayout from "@/components/admin/AdminLayout";
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import {Form, Formik} from "formik";
import useAutosaveSubmit from "@/hooks/useAutosaveSubmit";
import FormikLabelAndInput from "@/components/admin/FormikLabelAndInput";
import FormikImageUpload from "@/components/admin/FormikImageUpload";
import FormikLabelAndCheckbox from "@/components/admin/DodavanjeKorisnika/FormikLabelAndCheckbox";
import FormikEditorContainer from "@/components/admin/FormikEditorContainer";
import AutoSave from "@/components/admin/AutoSave";
import FormikDropdownSelectDragAndDrop from "@/components/admin/FormikDropdownSelectDragAndDrop";
import DeleteIcon from "@mui/icons-material/Delete";


const EXAMPLE_SURORGANIZERS = [
  {
    id: "1",
    name: "Suroganizator 1",
    selected: false
  },
  {
    id: "2",
    name: "Suroganizator 2",
    selected: true
  },
  {
    id: "3",
    name: "Suroganizator 3",
    selected: false
  }
];

const UredivanjeProjekta = () => {
  const onSubmit = useCallback(async (values: any) => {
    return;
  }, []);

  const autosaveSubmit = useAutosaveSubmit(onSubmit);

  return (
    <AdminLayout>
      <Typography m={"2rem"} variant={"h4"}>Uređivanje projekta</Typography>
      <Formik initialValues={{
        imeProjekta: "",
        fotografija: undefined,
        vidljivo: true,
        naslovnica: true,
        opisProjekta: "",
        suorganizatori: EXAMPLE_SURORGANIZERS,
        facebook: "",
        instagram: "",
        web: ""
      }} onSubmit={autosaveSubmit}>
        {({submitForm}) => (
          <Form>
            <Stack direction={"column"} justifyContent={"space-between"} alignItems={"start"}>
              <Box m={"2rem"}>
                <FormikLabelAndInput label={"Ime projekta"} name={"imeProjekta"} type={"text"}/>
                <FormikImageUpload label={"Fotografija"} name={"fotografija"}/>
                <FormikLabelAndCheckbox label={"Vidljivo"} name={"vidljivo"}/>
                <FormikLabelAndCheckbox label={"Naslovnica"} name={"naslovnica"}/>
                <Typography variant={"subtitle1"} color={"primary"} mt={"1rem"}>Opis projekta</Typography>
              </Box>
              <FormikEditorContainer name={"opisProjekta"}/>
              <Divider sx={{width: "100%", mt: "1rem"}}/>
              <Stack display={"inline-flex"} m={"2rem"} gap={"2rem"} direction={{xs: "column", md: "row"}}
                     justifyContent={"space-between"}
                     alignItems={"start"} maxWidth={"600px"} width={"100%"} mt={"2rem"}>
                <Typography variant={"h5"} color={"primary"} width={"200px"}
                            sx={{fontWeight: "bold"}}>{"Suroganizatori"}</Typography>
                <FormikDropdownSelectDragAndDrop name={"suorganizatori"} label={"Suroganizatori"}/>
              </Stack>
              <Stack direction={"column"} m={"2rem"} width={"100%"}>
                <FormikLabelAndInput label={"Facebook"} name={"facebook"} type={"text"}/>
                <FormikLabelAndInput label={"Instagram"} name={"instagram"} type={"text"}/>
                <FormikLabelAndInput label={"Web"} name={"web"} type={"text"}/>
              </Stack>
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

export default UredivanjeProjekta