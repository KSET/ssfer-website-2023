import React, {ReactNode} from "react";
import {Grid} from "@mui/material";
import {RegularBreakpoints} from "@mui/material/Grid/Grid";
import EditableCard, {LeftOrRight} from "@/components/EditableGrid/EditableCard";

export default function EditableGrid({components, gridBreakpoints, onEdit, onMove}: {
  gridBreakpoints?: RegularBreakpoints,
  components: ReactNode[],
  onEdit: (index: number) => void,
  onMove: (from: number, to: number) => void
}) {

  const onMoveHandler = (leftOrRight: LeftOrRight, index: number) => {
    const moveNumber = leftOrRight === "left" ? -1 : 1;
    const newIndex = index + moveNumber;
    if (newIndex < 0 || newIndex >= components.length) {
      return;
    }
    onMove(index, newIndex);
  }

  return (
    <Grid container>
      {components.map((component, index) => (
        <Grid item key={index} {...gridBreakpoints}>
          <EditableCard onMove={(leftOrRight) => onMoveHandler(leftOrRight, index)} onEdit={() => onEdit(index)}>
            {component}
          </EditableCard>
        </Grid>
      ))}
    </Grid>
  )
}