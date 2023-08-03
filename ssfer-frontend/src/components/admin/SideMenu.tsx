import React, {ReactNode, useState} from "react";
import {Box, Collapse, Divider, Stack, Typography} from "@mui/material";
import {ArrowRight} from "@mui/icons-material";


export default function SideMenu({open, drawerWidth}: {
  open: boolean,
  drawerWidth: number | string
}) {

  return (
    <Collapse in={open} orientation={"horizontal"} unmountOnExit>
      <Stack direction={"column"} divider={<Divider/>} width={{xs: "100vw", sm: drawerWidth}} height={"100%"}
             sx={{borderRight: "1px black solid", overflow: "auto"}}>
        <SideMenuItem title={"Projekti"}/>
        <SideMenuItem title={"Sekcije"}>
          <SideMenuItem title={"Sekcija 1"}/>
        </SideMenuItem>
        <Divider/>
      </Stack>
    </Collapse>
  )
}

const SideMenuItem = ({title, children}: { title: string, children?: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <Stack py={"1rem"} pl={"2rem"} pr={"4rem"} width={"100%"} direction={"row"} alignItems={"center"}
             justifyContent={"space-between"} onClick={() => toggleOpen()}>
        <Typography variant={"h6"} color={"primary"}>
          {title}
        </Typography>
        {children && (
          <ArrowRight sx={{
            transform: open ? "rotate(-90deg)" : "rotate(90deg)",
            transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
          }}/>
        )}
      </Stack>
      {children && (
        <Collapse in={open} timeout={"auto"} unmountOnExit>
          <>
            <Divider/>
            <Box ml={"2rem"}>
              {children}
            </Box>
          </>
        </Collapse>

      )}
    </>
  )
}