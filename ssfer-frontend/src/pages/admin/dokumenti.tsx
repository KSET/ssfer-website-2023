import {useState} from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {Box} from "@mui/material";
import TitleWithPlus from "@/components/admin/TitleWithPlus";
import EditableGrid from "@/components/EditableGrid/EditableGrid";
import StackImageWithText from "@/components/StackImageWithText";

const Dokumenti = () => {
  const [components, setComponents] = useState([
    <StackImageWithText key={1} imageUrl={"/portfolio.png"} imageAlt={"portfolio"} text={"Plan rada 2022-2023"}/>,
    <StackImageWithText key={2} imageUrl={"/portfolio.png"} imageAlt={"portfolio"} text={"Plan rada 2022-2023"}/>,
    <StackImageWithText key={3} imageUrl={"/portfolio.png"} imageAlt={"portfolio"} text={"Plan rada 2022-2023"}/>,
    <StackImageWithText key={4} imageUrl={"/portfolio.png"} imageAlt={"portfolio"} text={"Plan rada 2022-2023"}/>,
  ]);

  const moveComponent = (from: number, to: number) => {
    const newComponents = [...components];
    newComponents.splice(to, 0, newComponents.splice(from, 1)[0]);
    setComponents(newComponents);
  }

  return (
    <AdminLayout>
      <Box m={"2rem"}>
        <TitleWithPlus title={"Dokumenti"} onAdd={() => {
        }}/>

        <EditableGrid components={components} onEdit={() => {
        }} onMove={moveComponent} gridBreakpoints={{xl: 3, lg: 4, md: 6, sm: 6, xs: 11}}/>


      </Box>
    </AdminLayout>
  )
}

export default Dokumenti;