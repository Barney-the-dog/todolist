import './styles/App.css';
import React from "react";
import Main from './components/Main/Main';
import { globalContext as GlobalContext } from "./contexts/globalContext";
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

  const initialState = {
    list: [],
    text: ''
  }

  const [state, dispatch] = useLocalStorage('task', initialState)

return (
  <>
  <GlobalContext.Provider value={{state, dispatch}}>
  <Main />
  </GlobalContext.Provider>
  </>
);
}

export default App;

