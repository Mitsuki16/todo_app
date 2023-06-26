import "./App.css";
import TaskPopup from "./components/TaskPopup";
import { useEffect, useState } from "react";
import PrintTodos from "./components/PrintTodos";
import axios from "axios";


function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [status, setStatus] = useState("all");
  

  // useEffect(() => {
  //   const todoItemss = JSON.parse(localStorage.getItem("LOCAL_STORAGE"));
  //   if (todoItemss) {
  //     setTodoItems(todoItemss);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("LOCAL_STORAGE", JSON.stringify(todoItems));
  // }, [todoItems]);

  const api = axios.create({
    baseURL: "http://localhost:3010/",
  });

  useEffect(() => {
    api.get("/").then((res) => {
      setTodoItems(res.data);
    });
  }, []);

  const deleteTodoItem = (data) => {
    api.delete("/",{data: data}).then((res) => {
      console.log(res)
    });
    const todos = todoItems.filter((todoItem) => todoItem.title !== data.title)
    setTodoItems(todos);
  };

  const addTodoItem = (data) => {
    api.post("/",data).then((res) => {
      console.log(res)
    });
    setTodoItems((prevState) => {
      return [...prevState, data];
    });
  };

  const handleCheckedStaus = async (data) => {
    await api.patch("/",data).then((res) => {
      console.log(res)
    });
    api.get("/").then((res) => {
      setTodoItems(res.data);
    });
    console.log(todoItems)
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="mt-5 flex justify-center">
      <div className="lg:w-[40pc] w-[27pc] ">
        <div className="flex justify-center">
          <div>
            <h1 className=" text-[25pt] font-bold lg:text-[3pc] text-gray-500">
              TODO APP
            </h1>
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <label
            htmlFor="todo-item-add"
            role="button"
            className=" bg-indigo-500 text-white rounded-lg font-light h-11 p-2 text-center text-lg lg:w-40 w-32 "
          >
            Add Task
          </label>
          <select
            onChange={handleStatusChange}
            name="status_op"
            id="status_op"
            className=" bg-gray-300 p-3 rounded-lg"
          >
            <option value="all">All</option>
            <option value="incompleted">InCompleted</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="mt-4 rounded-lg p-5 bg-gray-100 flex  justify-center flex-col gap-4 ">
          <PrintTodos
            onCheckedStatusChanged={handleCheckedStaus}
            deleteTodoItem={deleteTodoItem}
            status={status}
            todos={todoItems}
          ></PrintTodos>
        </div>
        <div>
          <TaskPopup onAdd={addTodoItem}></TaskPopup>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
