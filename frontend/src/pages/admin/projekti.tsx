import {Box} from "@mui/material";
import TitleWithPlus from "@/components/admin/TitleWithPlus";
import EditableGrid from "@/components/EditableGrid/EditableGrid";
import {useState} from "react";
import ProjektEditable from "@/components/projekti/ProjektEditable";
import AdminLayout from "@/components/admin/AdminLayout";


export default function Projekti() {
  const [components, setComponents] = useState([
    <ProjektEditable key={1}/>,
    <ProjektEditable key={2}/>,
    <ProjektEditable key={3}/>,
    <ProjektEditable key={4}/>,
  ]);

  const moveComponent = (from: number, to: number) => {
    const newComponents = [...components];
    newComponents.splice(to, 0, newComponents.splice(from, 1)[0]);
    setComponents(newComponents);
  }

  const onEdit = (index: number) => {
    location.href = "uredivanje-projekta/" + index;
  }

  return (
    <AdminLayout>
      <Box m={"2rem"}>
        <TitleWithPlus title={"Projekti"} onAdd={() => {
        }}/>

        <EditableGrid components={components} onEdit={onEdit} onMove={moveComponent}
                      gridBreakpoints={{xl: 3, lg: 4, md: 6, xs: 11}}/>

      </Box>
    </AdminLayout>
  )
}