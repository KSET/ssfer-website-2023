import AdminLayout from "@/components/admin/AdminLayout";
import {Box, Typography} from "@mui/material";
import EditorContainer from "@/components/admin/EditorContainer";

const PolitikaPrivatnosti = () => {
  const onChange = async (values: string) => {
    console.log(values);
  }

  return (
    <AdminLayout>
      <Box m={"2rem"}>
        <Typography variant={"h4"}>Politika privatnosti</Typography>
      </Box>
      <Box mt={"2rem"}>
        <EditorContainer onChange={onChange}/>
      </Box>
    </AdminLayout>
  )
}

export default PolitikaPrivatnosti;