import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  where,
  updateDoc,
  deleteDoc,
getDocs
} from "firebase/firestore";
import { db } from "./firebase";


function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  //
  const deleteComplete = async (todo) => {
    const collectionRef=collection(db,'todos');
    const q=query(collectionRef,where("completed","==",true));
    const snapshot=await getDocs(q);
    const results=snapshot.docs.map((doc)=>({...doc.data(),id:doc.id}));

    results.forEach(async(result)=>{
      const docRef=doc(db,"todos",result.id);
      await deleteDoc(docRef);
    })
    
    // await deleteDoc(doc(db, "todos", where('completed', '==', true)));
  };
  ///



  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo deleteComplete={deleteComplete}/>
       
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      
</div>
  );
}
export default App;
