import React, { useState,useEffect } from "react";
import { Button, InputLabel,FormControl,Input } from "@material-ui/core";
import "./App.css";
import Todo from './Todo';

import firebase from 'firebase';
import db from "./firebase";

function App() {
  const [todos, setToDos] = useState([]);
  const [input, setInput] = useState("");


// when the app loads ,we need to listen to database and fetch todos as added/waitForElementToBeRemoved. 
useEffect(() => {
  // works when app.js loads 
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setToDos(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo})))
  })
}, []);



  // on clicking it should add item to settodos
  const addTodo = (event) => {
    event.preventDefault(); //will stop the refresh of page.

    // add item to the firebase databse 
   db.collection('todos').add({
     todo:input,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()
   })
    setToDos([...todos, input]);
    setInput("");
  };



  return (
    <div className="App">
      <h1>🔗TO DO LIST🔗</h1>
<form>
      <FormControl>
        <InputLabel>📌Write a todo task.</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>

      <Button
        disabled={!input}
        onClick={addTodo}
        variant="contained"
        color="primary"
      >
        Add Items!
      </Button>
</form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
