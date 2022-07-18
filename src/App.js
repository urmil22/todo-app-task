import React,{ useState} from 'react'
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Form from './components/Form';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form todos={todos} setTodos={setTodos} 
      setInputText={setInputText} inputText={inputText} />
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
