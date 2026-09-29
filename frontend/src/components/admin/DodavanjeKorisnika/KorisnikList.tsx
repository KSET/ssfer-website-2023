import React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const KorisnikList = () => {
  return (
    <List sx={{borderRight: "1px solid black", overflow: "auto", maxHeight: "100%"}}>
      <Box mt={"2rem"}/>
      <ListItem sx={{borderTop: "1px solid black", borderBottom: "1px solid black"}} disablePadding={true}>
        <ListItemButton sx={{py: "2rem"}}>
          <ListItemText primary={
            <Stack direction={"column"}>
              <Typography variant={"h6"}>Marin Capan</Typography>
              <Typography variant={"body2"} overflow={"hidden"}
                          textOverflow={"ellipsis"}>marin.capan@kset.org</Typography>
            </Stack>
          }/>
          <ListItemIcon>
            <IconButton>
              <DeleteIcon/>
            </IconButton>
          </ListItemIcon>
        </ListItemButton>

      </ListItem>
    </List>
  )
}

export default KorisnikList;