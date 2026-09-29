import {RegularBreakpoints} from "@mui/material/Grid/Grid";
import React, {ReactNode} from "react";
import {DragDropContext, Draggable, Droppable, DropResult, ResponderProvided} from "react-beautiful-dnd";
import {Grid} from "@mui/material";

export default function DragAndDropGridV2({gridBreakpoints, onUpdate, components}: {
  gridBreakpoints?: RegularBreakpoints,
  onUpdate: (from: number, to: number) => void,
  components: { id: string, component: ReactNode }[]
}) {

  const [childComponents, setChildComponents] = React.useState(components);

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) {
      return;
    }

    const newChildComponents = [...childComponents];
    newChildComponents.splice(result.destination.index, 0, newChildComponents.splice(result.source.index, 1)[0]);
    setChildComponents(newChildComponents);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={"droppable"} direction={"horizontal"}>
        {provided => (
          <Grid container ref={provided.innerRef} {...provided.droppableProps}>
            {childComponents.map((component, index) => (
              <Draggable key={component.id} draggableId={component.id} index={index}>
                {provided => (
                  <Grid item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} xs={4}>
                    {component.component}
                  </Grid>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Grid>
        )}
      </Droppable>
    </DragDropContext>
  )
}