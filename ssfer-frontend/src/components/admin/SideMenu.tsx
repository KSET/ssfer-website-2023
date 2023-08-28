import React, {ReactNode, useState} from "react";
import {Box, Collapse, Divider, Stack, Typography} from "@mui/material";
import {ArrowRight} from "@mui/icons-material";


interface IMenuItem {
  title: string,
  link: string,
  children?: IMenuItem[]
}

const menuItems: IMenuItem[] = [
  {
    title: "Politika privatnosti",
    link: "/politika-privatnosti"
  },
  {
    title: "Naslovnica",
    link: "/naslovnica"
  },
  {
    title: "Korisnici",
    link: "/korisnici"
  },
  {
    title: "Sekcije",
    link: "/sekcije"
  },
  {
    title: "Projekti",
    link: "/projekti"
  },
  {
    title: "Partneri",
    link: "/partneri"
  },
  {
    title: "Dokumenti",
    link: "/dokumenti"
  },
  {
    title: "Kontakti",
    link: "/kontakti"
  }
]


export default function SideMenu({open, drawerWidth}: {
  open: boolean,
  drawerWidth: number | string
}) {

  return (
    <Collapse in={open} orientation={"horizontal"} unmountOnExit>
      <Stack direction={"column"} divider={<Divider/>} width={{xs: "100vw", sm: drawerWidth}} height={"100%"}
             sx={{borderRight: "1px black solid", overflow: "auto"}}>
        {menuItems.map((item, index) => (
          <SideMenuItem key={index} title={item.title}>
            {item.children?.map((child, childIndex) => (
              <SideMenuItem key={childIndex} title={child.title}/>
            ))}
          </SideMenuItem>
        ))}
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
        <Typography variant={"subtitle1"} color={"primary"}>
          {title}
        </Typography>
        {children && (
          <ArrowRight sx={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
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