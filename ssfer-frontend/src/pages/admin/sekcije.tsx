import {Box, useTheme} from "@mui/material";
import {useState} from "react";
import SekcijaCard from "@/components/sekcije/SekcijaCard";
import {SekcijaEnum} from "@/components/sekcije/SekcijaEnum";
import dynamic from "next/dynamic";
import EditableGrid from "@/components/EditableGrid/EditableGrid";
import TitleWithPlus from "@/components/admin/TitleWithPlus";
import AdminLayout from "@/components/admin/AdminLayout";

const repeat = (n: number, f: (i: number) => any) => Array.from({length: n}, (_, i) => f(i));

const DraggingGrid = dynamic(() => import("@/components/DragAndDropGrid/DragAndDropGridV2"), {
  ssr: false,
});

export default function Sekcije() {
  const theme = useTheme();

  const [components, setComponents] = useState([
    <SekcijaCard key={1} sekcija={SekcijaEnum.COMP}/>,
    <SekcijaCard key={2} sekcija={SekcijaEnum.DISCO}/>,
    <SekcijaCard key={3} sekcija={SekcijaEnum.BIKE}/>,
    <SekcijaCard key={4} sekcija={SekcijaEnum.COMP}/>,
    <SekcijaCard key={5} sekcija={SekcijaEnum.DISCO}/>,
    <SekcijaCard key={6} sekcija={SekcijaEnum.BIKE}/>,
    <SekcijaCard key={7} sekcija={SekcijaEnum.COMP}/>,
  ]);

  const moveComponent = (from: number, to: number) => {
    const newComponents = [...components];
    newComponents.splice(to, 0, newComponents.splice(from, 1)[0]);
    setComponents(newComponents);
  }

  return (
    <>
      <AdminLayout>
        <Box m={"2rem"}>
          <TitleWithPlus title={"Sekcije"} onAdd={() => {
          }}/>

          <EditableGrid components={components} onEdit={() => {
          }} onMove={moveComponent} gridBreakpoints={{xl: 3, lg: 4, md: 6, xs: 11}}/>


        </Box>
      </AdminLayout>

    </>
  )
}


