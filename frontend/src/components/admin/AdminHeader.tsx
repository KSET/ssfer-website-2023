import {Box, Divider, IconButton, Stack, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {useState} from "react";

export default function AdminHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <Box>
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
        <Divider/>
      </Box>
    </>

  )
}