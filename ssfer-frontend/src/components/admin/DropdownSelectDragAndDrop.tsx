import {Box, Button, Collapse, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {DragDropContext, Draggable, Droppable, DropResult, ResponderProvided} from "react-beautiful-dnd";
import {Star, StarOutline} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

export interface DropdownSelectProps {
  id: string;
  name: string;
  selected: boolean;
}

interface Props {
  label: string;
  items: DropdownSelectProps[];
  onMove: (from: number, to: number) => void;
  onIconClick: (index: number) => void;
}

export default function DropdownSelectDragAndDrop({label, items, onMove, onIconClick}: Props) {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) {
      return;
    }

    onMove(result.source.index, result.destination.index);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box width={"100%"}>
        <Button
          onClick={handleClick}
          variant="contained"
          disableElevation
          fullWidth={true}
          endIcon={<KeyboardArrowDownIcon/>}
        >
          {label}
        </Button>
        <Collapse in={open} orientation={"vertical"} timeout="auto" unmountOnExit sx={{width: "100%"}}>
          <Box>
            <Droppable droppableId={"droppable"} direction={"vertical"}>
              {provided => (
                <MenuList autoFocusItem={open} variant="menu"
                          sx={{maxHeight: "200px", overflow: "auto", width: "100%"}}
                          {...provided.droppableProps}
                          ref={provided.innerRef}>
                  {items.map((component, index) => (
                    <Draggable key={component.id} draggableId={component.id} index={index}>
                      {provided => (
                        <MenuItem key={component.id}
                                  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                                  disableRipple={true}
                                  sx={{width: "100%"}}
                        >
                          <ListItemIcon>
                            <MenuIcon/>
                          </ListItemIcon>
                          <ListItemText>{component.name}</ListItemText>
                          <ListItemIcon>
                            <IconButton onClick={() => onIconClick(index)}>
                              {component.selected ? <Star/> : <StarOutline/>}
                            </IconButton>
                          </ListItemIcon>
                        </MenuItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </MenuList>
              )}
            </Droppable>
          </Box>
        </Collapse>
      </Box>
    </DragDropContext>
  )
}
