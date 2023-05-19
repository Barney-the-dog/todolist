import React, { useReducer } from 'react';
import { useState } from 'react';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';
import Main from './components/Main/Main';
import { globalContext as GlobalContext } from './contexts/globalContext';
import { reducer } from './reducers/reducer';

function App() {

  const initialState = {
    list: [],
    text: ''
  }

  const [state, dispatch] = useReducer(reducer, initialState)


  const [list, setList] = useLocalStorage('task', [])
  
  
  const changeTaskStatus = (id) => {
      const newArr = list.map(el => {
          if(el.id === id) {
              el.taskStatus = !el.taskStatus
          }
          return {...el}
      })
      setList(newArr)
    }

  function deleteTask(id) {
      setList(list.filter((el) => id !== el.id));
    }
  
  return (
    <>
    <GlobalContext.Provider value={{state, dispatch, changeTaskStatus, deleteTask}}>
    <Main />
    </GlobalContext.Provider>
    </>
  );
}

export default App;
