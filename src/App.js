import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input, Box } from "@material-ui/core";
import TodoList from "./TodoList";
import firebase from "firebase";
import db from "./firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <Box mt="20px">
          <FormControl>
            <InputLabel htmlFor="todo-input">Enter Todo</InputLabel>
            <Input
              id="todo-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              size="large"
            />
          </FormControl>
        </Box>
        <Box mt="20px">
          <Button type="submit" color="primary" variant="contained">
            Add Todo
          </Button>
        </Box>
      </form>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
