import {Box, IconButton, Stack, useTheme} from "@mui/material";
import React, {ReactNode} from "react";
import {ArrowLeft, ArrowRight, Edit} from "@mui/icons-material";

export type LeftOrRight = "left" | "right";

export default function EditableCard({onMove, onEdit, children}: {
  onMove: (option: LeftOrRight) => void,
  onEdit: () => void,
  children: ReactNode
}) {
  const theme = useTheme();

  return (
    <Stack direction={"column"} alignItems={"center"} sx={{backgroundColor: theme.palette.secondary.main}} m={"1rem"}>
      <Box width={"100%"}>
        {children}
      </Box>

      <Stack direction={"row"} justifyContent={"flex-end"} sx={{padding: "0.5rem"}}>
        <IconButton onClick={() => onMove("left")}>
          <ArrowLeft/>
        </IconButton>
        <IconButton onClick={onEdit}>
          <Edit/>
        </IconButton>
        <IconButton onClick={() => onMove("right")}>
          <ArrowRight/>
        </IconButton>
      </Stack>
    </Stack>

  )
}