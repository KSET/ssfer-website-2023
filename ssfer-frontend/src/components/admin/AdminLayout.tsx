import {Box, Divider, IconButton, Stack, Typography, useTheme} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import React, {useState} from "react";
import SideMenu from "@/components/admin/SideMenu";

const DRAWER_WIDTH = 400;

export default function AdminLayout({children}: { children: React.ReactNode }) {
  const theme = useTheme();

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <Box height={"100vh"}>
      <Stack height={"100%"} width={"100%"} overflow={"hidden"}>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} my={"0.5rem"} mx={"1rem"}>
          <Typography variant={"h4"} color={"primary"} sx={{fontWeight: "bold"}}>
            SS FER Admin
          </Typography>
          <Stack direction={"row"} justifyContent={"space-evenly"} alignContent={"center"} columnGap={"1rem"}>
            <IconButton onClick={() => toggleMenu()}>
              <MenuIcon/>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon/>
            </IconButton>
          </Stack>
        </Stack>
        <Divider sx={{color: "black"}}/>

        <Box display={"flex"} height={"100%"} sx={{overflowY: "auto"}}>
          <SideMenu open={openMenu} drawerWidth={DRAWER_WIDTH}/>
          <Box width={{xs: openMenu ? 0 : "100%", sm: openMenu ? "calc(100% - " + DRAWER_WIDTH + "px)" : "100%"}}
               sx={{transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", overflow: "auto"}}>
            {children}
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}