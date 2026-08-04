import AdminLayout from "@/components/admin/AdminLayout";
import {Box, Button, Stack, Typography} from "@mui/material";
import React, {useCallback} from "react";
import useAutosaveSubmit from "@/hooks/useAutosaveSubmit";
import {Form, Formik} from "formik";
import FormikNEditableInputs from "@/components/admin/FormikNEditableInputs";
import AutoSave from "@/components/admin/AutoSave";

const Kontakti = () => {
  const onSubmit = useCallback(async (values: any) => {
    return true;
  }, []);

  const autosaveSubmit = useAutosaveSubmit(onSubmit);

  const onAddNewValue = useCallback((values: any) => {
    return;
  }, []);

  return (
    <AdminLayout>
      <Box m={"2rem"}>
        <Typography variant={"h4"} color={"primary"} sx={{fontWeight: "bold"}}>
          Kontakti
        </Typography>

        <Typography variant={"h5"} color={"primary"} sx={{fontWeight: "bold"}} mt={"2rem"}>
          Osnovne informacije
        </Typography>
        <Formik initialValues={{"test": {"test1": "", "test2": ""}, "haha": {"haha1": "", "haha2": ""}}}
                onSubmit={onSubmit}>
          {({submitForm}) => (
            <Form>
              <Stack mt={"1rem"}>
                <FormikNEditableInputs fieldNames={["test1", "test2"]} name={"test"}/>
                <FormikNEditableInputs fieldNames={["haha1", "haha2"]} name={"haha"}/>
                <AutoSave onSubmit={submitForm}/>
              </Stack>
            </Form>
          )}
        </Formik>
        <Stack>
          <Formik initialValues={{"newField": {"key": "", "value": ""}}} onSubmit={onAddNewValue}>
            {({submitForm}) => (
              <Form>
                <Stack direction={"row"} alignItems={"center"}>
                  <FormikNEditableInputs fieldNames={["key", "value"]} name={"newField"}/>
                  <Button color={"primary"} variant={"contained"} onClick={submitForm}>Add</Button>
                </Stack>
              </Form>

            )}
          </Formik>
        </Stack>

      </Box>
    </AdminLayout>
  )
}

export default Kontakti;