import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList/TaskList'
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [list, setList] = useState([])
  const [text, setText] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    setList((prev) => [...prev, {text, id: Date.now(), taskStatus: false}])
    setText('')
  }
  const changeTaskStatus = (id) => {
      const newArr = list.map(el => {
          if(el.id === id) {
              el.taskStatus = !el.taskStatus
          }
          return {...el}
      })
      setList(newArr)
    }
  
  return (
    <>
    <main className='container my-5'>
      <Header />
      <Form text={text} setText={setText} handleSubmit={handleSubmit}/>    
      <TaskList posts={list} changeTaskStatus={changeTaskStatus} />  
      <Footer />
    </main>
    </>
  );
}

export default App;
