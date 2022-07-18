import React from 'react'

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
  }
  const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
      setInputText('');
  }

  return(
      <form >
 <p>Add a new task in the list</p>
 <input type='text' onChange={inputTextHandler} value={inputText}/>
 <button type='submit' onClick={submitTodoHandler}>Submit</button>
 <div>
  <select name='todos'>
      <option value='all'>All</option>
      <option value='completed'>Completed</option>
      <option value='uncompleted'>Uncompleted</option>
  </select>
 </div>
</form> );
}

export default Form;