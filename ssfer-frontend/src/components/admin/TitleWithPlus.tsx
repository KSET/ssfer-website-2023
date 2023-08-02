import {IconButton, Stack, Typography} from "@mui/material";
import {AddCircleOutlined} from "@mui/icons-material";
import React from "react";

export default function TitleWithPlus({title, onAdd}: { title: string, onAdd: () => void }) {

  return (
    <Stack direction={"row"} columnGap={"0.5rem"}>
      <Typography variant={"h4"} color={"primary"} sx={{fontWeight: "bold"}}>
        {title}
      </Typography>
      <IconButton onClick={onAdd}>
        <AddCircleOutlined/>
      </IconButton>
    </Stack>
  )
}