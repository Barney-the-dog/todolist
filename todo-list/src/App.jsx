import './styles/App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useLocalStorage } from './hooks/useLocalStorage';
import Main from './components/Main/Main';
import { globalContext as GlobalContext } from './contexts/globalContext';
import React from 'react';

function App() {
  const initialState = {
    list: []
  }

  const [state, dispatch] = useLocalStorage('tasks', initialState);

  
  return (
    
     <div className="App wrapper">
      <Header />
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Main />
      </GlobalContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

