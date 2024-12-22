import Todolist from "./components/Todolist/Todolist";
import Todoinput from "./components/Todoinput/Todoinput";

import "./App.css";
import { useState } from "react";

function App() {
  const [todoData, setTododata] = useState([]);
  const [todoVal, setTodoVal] = useState("");

  function addData(data) {
    let newData = [...todoData, data];
    setTododata(newData);
  }

  function deleteData(index) {
    let newData = todoData.filter((data, todoindex) => {
      return index != todoindex;
    });
    setTododata(newData);
  }

  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h1>Todo App</h1>
      </header>
      <main>
        <Todoinput
          addData={addData}
          todoVal={todoVal}
          setTodoVal={setTodoVal}
        />
        <Todolist todoData={todoData} deleteData={deleteData} />
      </main>
    </>
  );
}

export default App;
