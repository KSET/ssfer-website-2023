import {useState} from "react";
import {Box} from "@mui/material";
import TitleWithPlus from "@/components/admin/TitleWithPlus";
import EditableGrid from "@/components/EditableGrid/EditableGrid";
import PartnerEditable from "@/components/partneri/PartnerEditable";
import AdminLayout from "@/components/admin/AdminLayout";


export default function Partneri() {
  const [components, setComponents] = useState([
    <PartnerEditable key={1}/>,
    <PartnerEditable key={2}/>,
    <PartnerEditable key={3}/>,
    <PartnerEditable key={4}/>,
  ]);

  const moveComponent = (from: number, to: number) => {
    const newComponents = [...components];
    newComponents.splice(to, 0, newComponents.splice(from, 1)[0]);
    setComponents(newComponents);
  }

  return (
    <AdminLayout>
      <Box m={"2rem"}>
        <TitleWithPlus title={"Sekcije"} onAdd={() => {
        }}/>

        <EditableGrid components={components} onEdit={() => {
        }} onMove={moveComponent} gridBreakpoints={{xl: 3, lg: 4, md: 6, sm: 6, xs: 11}}/>


      </Box>
    </AdminLayout>
  )
}