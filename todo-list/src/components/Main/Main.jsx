import Header from "../Header/Header";
import Form from "../Form/Form";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

function Main() {

  return (
    <main className="container my-5">
        <Header />
        <Form />
        <TaskList /> 
        <Footer /> 
    </main>
  );
}

export default Main;