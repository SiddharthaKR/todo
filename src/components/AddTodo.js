import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { TextField } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css"


export default function AddTodo(props) {

  const[toggle,setToggle]=useState(false)
  const[error,setError]=React.useState(false)
  const [title, setTitle] = React.useState("");
  ///////
  // function deleteAll(){
  //   console.log("clicked");
    
  // var completed_query = db.collection('todos').where('completed','==',true);
  // completed_query.get().then(function(querySnapshot) {
  //   querySnapshot.forEach(function(doc) {
  //     doc.ref.delete();
  //   });
  // });
  // }
  ///////////
  React.useEffect(()=>{
    if(title.length>=5)
    setError(false)
  },[title])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    if(title.length<5){
   setError(true)
    }
    else  {
      
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=" input_container">
        <TextField
        autoComplete="off"
        error={error}
          fullWidth
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span className={error?"error":"hide"}>min length 5</span>
      </div>
      <div className="btn_container">
        <button type="submit" className="button-34">Add Task</button>
        <button type="button" onClick={() => props.removeComplete(!props.value)} className="button-34">{
      !props.value?"Remove Completed tasks": "Edit"        
}</button>
      </div>
      
    </form>
  );
}
