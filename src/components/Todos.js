import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import TodoCard from './TodoCard';

const Todos = () => {

  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
        const todosList = res.data;
        setTodos(todosList)
        setLoading(false)
    });
  }, []);
  

  

  return (
    < >
    <p>Added task in to-do list</p>
      {todos ? (
        <div className='todos'>
            {todos.slice(0, 50).map(todo => (
             <TodoCard todo={todo} key={todo.id}/>
             ))}
        </div>)
        
        : <p>Loading...</p> }
    </>
  )
}

export default Todos