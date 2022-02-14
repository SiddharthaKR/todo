import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [isActive, setActive] = React.useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
 

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
  <div className="comp-tile1">
    {
        !todo.completed&&(<> <div className="todo">
        <input
           style={{ textDecoration: todo.completed && "line-through",color:todo.completed&&"red" }}
           type="text"
           value={todo.title === "" ? newTitle : todo.title}
           className="list"
           onChange={handleChange}
         />
       
     
      
     </div>
     </> )
    }
   <div>
       
      
   </div>
    
      
   
    
    </div>
  );
}
