import React from "react";
import TodoItem from "./TodoItem";

function PrintTodos(props) {
  const todoItems_list = props.todos
    .filter((item) =>
      props.status === "all"
        ? item.status === "incompleted" || item.status === "completed"
        : item.status === props.status
    )
    .map((todoItem) => (
      <TodoItem
        onCheckedStatusChanged={props.onCheckedStatusChanged}
        onDelete={props.deleteTodoItem}
        key={todoItem.title}
        todo={todoItem}
      ></TodoItem>
      ));
  const no_todo = (
    <div className="flex justify-center">
      <h1 className=" font-bold w-40 text-center self-center text-gray-600 bg-gray-300 p-2 rounded-lg">
        No Todos
      </h1>
    </div>
  );
  return <div>{todoItems_list.length > 0 ? todoItems_list : no_todo}</div>;
}

export default PrintTodos;
