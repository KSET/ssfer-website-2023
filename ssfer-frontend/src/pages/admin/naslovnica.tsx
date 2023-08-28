import AdminLayout from "@/components/admin/AdminLayout";
import {Box, Typography} from "@mui/material";
import React, {useCallback, useState} from "react";
import {Form, Formik} from "formik";
import AutoSave from "@/components/admin/AutoSave";
import useAutosaveSubmit from "@/hooks/useAutosaveSubmit";
import FormikLabelAndInput from "@/components/admin/FormikLabelAndInput";
import {Stack} from "@mui/system";
import FormikImageUpload from "@/components/admin/FormikImageUpload";
import DropdownSelectDragAndDrop from "@/components/admin/DropdownSelectDragAndDrop";


export default function Naslovnica() {
  const onSubmit = useCallback(async (values: any) => {
    return true;
  }, []);

  const {autosaveSubmit} = useAutosaveSubmit(onSubmit);

  const onSubmitLinkovi = useCallback(async (values: any) => {
    return true;
  }, []);

  const {autosaveSubmit: autosaveSubmitLinkovi} = useAutosaveSubmit(onSubmitLinkovi);

  const [projektItems, setProjektItems] = useState([
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
  ]);

  const projektItemOnMove = useCallback((dragIndex: number, hoverIndex: number) => {
    const dragItem = projektItems[dragIndex];
    const newItems = [...projektItems];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, dragItem);
    setProjektItems(newItems);
  }, [projektItems]);

  const projektItemOnSelect = useCallback((index: number) => {
    const newItems = [...projektItems];
    newItems[index].selected = !newItems[index].selected;
    setProjektItems(newItems);
  }, [projektItems]);

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

        <Stack display={"inline-flex"} gap={"2rem"} direction={{xs: "column", md: "row"}}
               justifyContent={"space-between"}
               alignItems={"start"} maxWidth={"600px"} width={"100%"} mt={"2rem"}>
          <Typography variant={"h5"} color={"primary"} width={"200px"}
                      sx={{fontWeight: "bold"}}>{"Projekti"}</Typography>
          <DropdownSelectDragAndDrop label={"Projekti"} items={projektItems} onMove={projektItemOnMove}
                                     onIconClick={projektItemOnSelect}/>
        </Stack>

        <Typography variant={"h5"} color={"primary"} sx={{fontWeight: "bold"}} mt={"3rem"}>Linkovi</Typography>

        <Formik initialValues={{upoznajKset: "", newsletter: "", kontaktLink: ""}}
                onSubmit={autosaveSubmitLinkovi}>
          {({submitForm}) => (
            <Form>
              <Stack direction={"column"} justifyContent={"space-between"} alignItems={"start"}>
                <FormikLabelAndInput label={"Upoznaj KSET"} name={"upoznajKset"} type={"text"}/>
                <FormikLabelAndInput label={"Newsletter"} name={"newsletter"} type={"text"}/>
                <FormikLabelAndInput label={"Kontakt link"} name={"kontaktLink"} type={"text"}/>
              </Stack>
              <AutoSave onSubmit={submitForm}/>
            </Form>
          )}
        </Formik>


        <Stack display={"inline-flex"} gap={"2rem"} direction={{xs: "column", md: "row"}}
               justifyContent={"space-between"}
               alignItems={"start"} maxWidth={"600px"} width={"100%"} mt={"3rem"}>
          <Typography variant={"h5"} color={"primary"} width={"200px"}
                      sx={{fontWeight: "bold"}}>{"Projekti"}</Typography>
          <DropdownSelectDragAndDrop label={"Projekti"} items={projektItems} onMove={projektItemOnMove}
                                     onIconClick={projektItemOnSelect}/>
        </Stack>

      </Box>
    </AdminLayout>
  )
}