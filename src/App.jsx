import { useState } from "react";

// CSS
import "./App.css";

// Components
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import TaskForm from "./components/common/TaskForm/TaskForm";
import TaskList from "./components/common/TaskList/TaskList";
import Modal from "./components/common/Modal/Modal";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const deleteTask = (id) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrSHowModal = (display) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal.classList.remove("hide");
    } else {
      modal.classList.add("hide");
    }
  };

  const editTask = (task) => {
    hideOrSHowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id, title, difficulty) => {
    const updatedTask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideOrSHowModal(false);
  };

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          ></TaskForm>
        }
      ></Modal>
      <Header></Header>
      <main className="main">
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          ></TaskForm>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          ></TaskList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
