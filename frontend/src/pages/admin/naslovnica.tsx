import AdminLayout from "@/components/admin/AdminLayout";
import {Box, Typography} from "@mui/material";
import React, {useCallback} from "react";
import {Form, Formik} from "formik";
import AutoSave from "@/components/admin/AutoSave";
import useAutosaveSubmit from "@/hooks/useAutosaveSubmit";
import FormikLabelAndInput from "@/components/admin/FormikLabelAndInput";
import {Stack} from "@mui/system";
import FormikImageUpload from "@/components/admin/FormikImageUpload";
import FormikDropdownSelectDragAndDrop from "@/components/admin/FormikDropdownSelectDragAndDrop";


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

export default function Naslovnica() {
  const onSubmit = useCallback(async (values: any) => {
    console.log(values);
    return;
  }, []);

  const autosaveSubmit = useAutosaveSubmit(onSubmit);

  return (
    <AdminLayout>
      <Box m={"2rem"}>
        <Typography variant={"h4"} color={"primary"} sx={{fontWeight: "bold"}}>Naslovnica</Typography>

        <Typography variant={"h5"} color={"primary"} sx={{fontWeight: "bold"}} mt={"3rem"}>Tekstovi</Typography>

        <Formik
          initialValues={{
            oNama: "",
            sekcijeOpis: "",
            onNameNaslov: "",
            slika: undefined,
            projekti: EXAMPLE_PROJECTS,
            upoznajKset: "",
            newsletter: "",
            kontaktLink: "",
            strateskiPartneri: [{
              id: "1",
              name: "Partner 1",
              selected: false
            },
              {
                id: "2",
                name: "Partner 2",
                selected: true
              }
            ]
          }}
          onSubmit={autosaveSubmit}>
          {({submitForm}) => (
            <Form>
              <Stack direction={"column"} justifyContent={"space-between"} alignItems={"start"}>
                <FormikLabelAndInput label={"O Nama"} name={"oNama"} type={"text"}/>
                <FormikLabelAndInput label={"Sekcije Opis"} name={"sekcijeOpis"} type={"text"}/>
                <FormikLabelAndInput label={"O Nama Naslov"} name={"onNameNaslov"} type={"text"}/>
                <FormikImageUpload label={"Slika"} name={"slika"}/>
              </Stack>
              <Stack display={"inline-flex"} gap={"2rem"} direction={{xs: "column", md: "row"}}
                     justifyContent={"space-between"}
                     alignItems={"start"} maxWidth={"600px"} width={"100%"} mt={"2rem"}>
                <Typography variant={"h5"} color={"primary"} width={"200px"}
                            sx={{fontWeight: "bold"}}>{"Projekti"}</Typography>
                <FormikDropdownSelectDragAndDrop name={"projekti"} label={"Projekti"}/>
              </Stack>
              <Typography variant={"h5"} color={"primary"} sx={{fontWeight: "bold"}} mt={"3rem"}>Linkovi</Typography>
              <Stack direction={"column"} justifyContent={"space-between"} alignItems={"start"}>
                <FormikLabelAndInput label={"Upoznaj KSET"} name={"upoznajKset"} type={"text"}/>
                <FormikLabelAndInput label={"Newsletter"} name={"newsletter"} type={"text"}/>
                <FormikLabelAndInput label={"Kontakt link"} name={"kontaktLink"} type={"text"}/>
              </Stack>
              <Stack display={"inline-flex"} gap={"2rem"} direction={{xs: "column", md: "row"}}
                     justifyContent={"space-between"}
                     alignItems={"start"} maxWidth={"600px"} width={"100%"} mt={"3rem"}>
                <Typography variant={"h5"} color={"primary"} width={"200px"}
                            sx={{fontWeight: "bold"}}>{"Strateški partneri"}</Typography>
                <FormikDropdownSelectDragAndDrop name={"strateskiPartneri"} label={"Strateški partneri"}/>

              </Stack>
              <AutoSave onSubmit={submitForm}/>
            </Form>
          )}
        </Formik>
      </Box>
    </AdminLayout>
  )
}