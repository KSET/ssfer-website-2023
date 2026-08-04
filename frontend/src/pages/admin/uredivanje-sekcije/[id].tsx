import {useRouter} from "next/router";
import React from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {Box, Button, Divider, Grid, Stack, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import useAutosaveSubmit from "@/hooks/useAutosaveSubmit";
import AutoSave from "@/components/admin/AutoSave";
import FormikLabelAndInput from "@/components/admin/FormikLabelAndInput";
import FormikImageUpload from "@/components/admin/FormikImageUpload";
import FormikLabelAndCheckbox from "@/components/admin/DodavanjeKorisnika/FormikLabelAndCheckbox";
import FormikEditorContainer from "@/components/admin/FormikEditorContainer";
import FormikTextInput from "@/components/admin/FormikTextInput";
import DeleteIcon from "@mui/icons-material/Delete";

const UredivanjeSekcije = () => {
  const router = useRouter();
  const {id} = router.query;

  const onSubmitOsnovne = async (values: any) => {
    return;
  }

  const onAutosaveOsnoveSubmit = useAutosaveSubmit(onSubmitOsnovne)

  return (
    <AdminLayout>
      <Typography m={"2rem"} variant={"h4"}>Uređivanje sekcije</Typography>
      <Formik
        initialValues={{
          imeSekcije: "",
          fotografija: undefined,
          logotip: undefined,
          vidljivo: false,
          opisSekcije: "",
          voditeljSekcijeFoto: undefined,
          voditeljSekcijeIme: "",
          voditeljSekcijePrezime: "",
          voditeljSekcijeOpis: "",
          facebook: "",
          instagram: "",
          web: "",
        }}
        onSubmit={onAutosaveOsnoveSubmit}>
        {({submitForm}) => (
          <Form>
            <Stack direction={"column"} justifyContent={"space-between"} alignItems={"start"}>
              <Box m={"2rem"}>
                <FormikLabelAndInput label={"Ime sekcije"} name={"imeSekcije"} type={"text"}/>
                <FormikImageUpload label={"Fotografija"} name={"fotografija"}/>
                <FormikImageUpload label={"Logotip"} name={"logotip"}/>
                <FormikLabelAndCheckbox label={"Vidljivo"} name={"vidljivo"}/>
                <Typography variant={"subtitle1"} color={"primary"} mt={"1rem"}>Opis sekcije</Typography>
              </Box>
              <FormikEditorContainer name={"opisSekcije"}/>
              <Divider sx={{width: "100%", mt: "1rem"}}/>
              <Box p={"2rem"} width={"100%"}>
                <Typography variant={"subtitle1"} color={"primary"} mt={"1rem"} fontWeight={"bold"}>Voditelj
                  sekcije</Typography>
                <FormikImageUpload label={"Fotografija"} name={"voditeljSekcijeFoto"}/>
                <Grid container gap={"1rem"} width={"100%"}>
                  <Grid item xs={12} md={2}>
                    <Typography variant={"subtitle1"} color={"primary"} mt={"1rem"}>Ime</Typography>
                    <Field component={FormikTextInput} id={"voditeljSekcijeIme"} name={"voditeljSekcijeIme"}
                           type={"text"}/>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant={"subtitle1"} color={"primary"} mt={"1rem"}>Prezime</Typography>
                    <Field component={FormikTextInput} id={"voditeljSekcijePrezime"} name={"voditeljSekcijePrezime"}
                           type={"text"}/>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Typography variant={"subtitle1"} color={"primary"} mt={"1rem"}>Opis</Typography>
                    <Field component={FormikTextInput} id={"voditeljSekcijeOpis"} name={"voditeljSekcijeOpis"}
                           type={"text"}/>
                  </Grid>
                </Grid>

                <Typography variant={"subtitle1"} color={"primary"} mt={"1rem"} fontWeight={"bold"}>Društvene
                  mreže</Typography>
                <Stack direction={"column"}>
                  <FormikLabelAndInput label={"Facebook"} name={"facebook"} type={"text"}/>
                  <FormikLabelAndInput label={"Instagram"} name={"instagram"} type={"text"}/>
                  <FormikLabelAndInput label={"Web"} name={"web"} type={"text"}/>
                </Stack>
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

export default UredivanjeSekcije;