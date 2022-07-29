import "./App.css"
import { TodoCard } from "./components";
import { useState, useEffect } from "react"
import { getTodoData, postTodoData, patchTodoData } from "./services";

const App = () => {
  const [title, setTitle] = useState("")
  const [currId, setCurrId] = useState(null)
  const [todoData, setTodoData] = useState([])
  const [pushCounter, setPushCounter] = useState(0)
  const [toggleEdit, setToggleEdit] = useState(false)

  console.log("edittr", toggleEdit)

  const handleSubmit = async () => {
    const data = await postTodoData({ title, setPushCounter });
    setTodoData([...todoData, data]);
    setTitle("")
  }

  const setupEdit = (id) => {
    setToggleEdit(true);
    setCurrId(id);
  }

  const handleEdit = () => {
    patchTodoData(currId, title)
    setTitle("")
  }

  useEffect(() => {
    (async () => {
      const data = await getTodoData();
      setTodoData(data);
    })();
  }, [])

  return (
    <div className="main-container">
    <h2>To-Do List</h2>
     <h4 className="text">Add a new task in the list</h4>
      <div className="todo-option">
        <input type="search" placeholder="Enter the task here" onChange={(e) => setTitle(e.target.value)} value={title} />
        {toggleEdit ? <button onClick={() => handleEdit()}>Edit</button> : <button onClick={() => handleSubmit()}>Submit</button>}

      </div>
      <div className="todos">
        {todoData && todoData.slice(pushCounter,).map((item) => {
          return (
            <TodoCard key={item.id} id={item.id} title={item.title} completed={item.completed} setupEdit={setupEdit} />
          )
        })}
      </div>
      <div className="todos">
        {todoData && todoData.slice(0, 50).map((item) => {
          return (
            <TodoCard key={item.id} id={item.id} title={item.title} completed={item.completed} setupEdit={setupEdit} />
          )
        })}
      </div>
    </div>
  )
}

export default App;