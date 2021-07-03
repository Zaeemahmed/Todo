import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AssignmentIcon from "@material-ui/icons/Assignment";
import db from "./firebase";

const TodoList = (props) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <List>
        {props.todos.map(({ todo, id }) => (
          <ListItem key={id}>
            <IconButton edge="start">
              <AssignmentIcon />
            </IconButton>

            <ListItemText>{todo}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon
                  onClick={() => db.collection("todos").doc(id).delete()}
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
