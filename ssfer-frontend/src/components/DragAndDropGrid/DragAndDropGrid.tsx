import {RegularBreakpoints} from "@mui/material/Grid/Grid";
import {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {Box, Grid, Stack} from "@mui/material";
import {useDrag, useDrop} from "react-dnd";


export default function DragAndDropGrid({gridBreakpoints, onUpdate, components}: {
  gridBreakpoints?: RegularBreakpoints,
  onUpdate: (from: number, to: number) => void,
  components: ReactNode[]
}) {

  const [draggingComponent, setDraggingComponent] = useState<ReactNode>(null);

  const onDrag = useCallback((index: number) => {
    setDraggingComponent(components[index]);
  }, [components]);

  return (
    <Grid container
          justifyContent={"start"}
          alignItems={"center"}
          mt={"2rem"}
          columnSpacing={"1rem"}
          rowGap={"2rem"}>
      {components.map((component, index) => (
        <GridDroppableItem key={index}
                           index={index}
                           onDrag={onDrag}
                           onUpdate={onUpdate}
                           gridBreakpoints={gridBreakpoints}
                           component={component}
                           draggingComponent={draggingComponent}/>
      ))}

    </Grid>
  )
}


function GridDroppableItem({index, onDrag, onUpdate, gridBreakpoints, component, draggingComponent}: {
  index: number,
  onDrag: (index: number) => void,
  onUpdate: (from: number, to: number) => void,
  gridBreakpoints?: RegularBreakpoints,
  component?: ReactNode,
  draggingComponent?: ReactNode
}) {

  const ref = useRef<HTMLDivElement>(null);

  const [{isOver, canDrop}, drop] = useDrop({
    accept: "DragAndDropGrid",
    drop: () => ({"index": index}),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop() && draggingComponent !== component,
    }),
  });

  const [{isDragging}, drag] = useDrag({
    type: "DragAndDropGrid",
    item: () => ({"index": index}),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult() as { index: number };

      if (!Number.isNaN(dropResult?.index - 1) && index !== dropResult?.index - 1) {
        if (index < dropResult?.index) {
          onUpdate(index, dropResult?.index - 1);
        } else {
          onUpdate(index, dropResult?.index);
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  useEffect(() => {
    if (isDragging) {
      onDrag(index);
    }
  }, [index, isDragging, onDrag])

  drag(drop(ref));

  return (
    <Grid ref={ref} display={isDragging ? "none" : "block"} item
          xs={(gridBreakpoints?.xs as number ?? 6) * (isOver && canDrop ? 2 : 1)}
          md={(gridBreakpoints?.md as number ?? 4) * (isOver && canDrop ? 2 : 1)}
          lg={(gridBreakpoints?.lg as number ?? 3) * (isOver && canDrop ? 2 : 1)}
          xl={(gridBreakpoints?.xl as number ?? 3) * (isOver && canDrop ? 2 : 1)}>

      {isOver && canDrop ? (
        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
          {/*<Box display={isOver && canDrop ? "block" : "none"}
               sx={{height: "100%", width: "2px", backgroundColor: "black"}}
               position={"absolute"} left={"-0.5rem"}/>*/}
          <Box sx={{opacity: 0.5}} width={"50%"}>
            {draggingComponent}
          </Box>
          <Box width={"50%"}>
            {component}
          </Box>
        </Stack>
      ) : component}
    </Grid>

  )
}