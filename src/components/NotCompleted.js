import React from 'react'

const NotCompleted = ({ todo, toggleComplete, handleDelete, handleEdit,}) => {
  return (<div>
    {
        todo.completed&&(<>
         <div className="todo">
         <input 
            type="text"
            value={todo.title }
            className="list"
            />
        
      
       
      
      </div>
      </>)
    }
    </div>)
  
}

export default NotCompleted