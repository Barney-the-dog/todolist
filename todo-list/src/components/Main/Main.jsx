import Header from "../Header/Header";
import Form from "../Form/Form";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import React from 'react';

function Main() {

  return (
    <main className="container my-5">
        <Form />
        <TaskList /> 
    </main>
  );
}

export default Main;