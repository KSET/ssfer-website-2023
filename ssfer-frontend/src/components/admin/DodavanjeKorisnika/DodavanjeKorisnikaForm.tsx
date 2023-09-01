import React, {useCallback} from "react";
import {Box, Button} from "@mui/material";
import {Form, Formik} from "formik";
import {Stack} from "@mui/system";
import FormikLabelAndInput from "@/components/admin/FormikLabelAndInput";
import DeleteIcon from "@mui/icons-material/Delete";


const DodavanjeKorisnikaForm = () => {
  const onSubmit = useCallback(async (values: any) => {
    return true;
  }, []);

  return (
    <Box>
      <Formik initialValues={{imeIPrezime: "", email: ""}}
              onSubmit={onSubmit}>
        {({submitForm}) => (
          <Form>
            <Stack direction={"column"} justifyContent={"space-between"} alignItems={"start"} rowGap={"2rem"}>
              <FormikLabelAndInput label={"Ime i prezime"} name={"imeIPrezime"} type={"text"}/>
              <FormikLabelAndInput label={"KSET e-adresa"} name={"email"} type={"text"}/>
            </Stack>
            <Stack direction={"row"} columnGap={{sx: 0, md: "10rem"}}
                   justifyContent={{xs: "space-between", md: "flex-start"}} alignItems={"center"}
                   mt={"4rem"}>
              <Button variant={"contained"} color={"primary"} onClick={submitForm} sx={{textTransform: "initial"}}>Dodaj
                korisnika</Button>
              <Button variant={"outlined"} color={"primary"} sx={{marginLeft: "1rem"}}><DeleteIcon/></Button>

            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default DodavanjeKorisnikaForm;