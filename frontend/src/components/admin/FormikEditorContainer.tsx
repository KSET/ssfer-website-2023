import EditorContainer from "@/components/admin/EditorContainer";
import {FormikValues, useFormikContext} from "formik";

interface Props {
  name: string;
}


const FormikEditorContainer = ({name}: Props) => {
  const {initialValues, setFieldValue} = useFormikContext<FormikValues>();
  
  return (
    <EditorContainer initialContent={initialValues[name] ?? ""} onChange={(content) => setFieldValue(name, content)}/>
  )
}

export default FormikEditorContainer;