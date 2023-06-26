import React, { useState } from "react";

function TodoItem(props) {
  const [checked, setChecked] = useState(
    props.todo.status === "completed" ? true : false
  );

  let title_classes = "w-[17pc] lg:w-[30pc] break-all ";
  if (props.todo.status === "completed") {
    title_classes += " line-through ";
  }

  const handleDelete = () => {
    const data = { time: props.todo.time, title: props.todo.title };
    props.onDelete(data);
  };

  const handleCheckedStatus = () => {
    console.log(checked);
    setChecked(!checked);
    console.log({
      status: checked === true ? "incompleted" : "completed",
      title: props.todo.title,
    });
    props.onCheckedStatusChanged({
      status: checked === true ? "incompleted" : "completed",
      title: props.todo.title,
      _id: props.todo._id,
    });
  };

  return (
    <div>
      <div className="m-1 mt-5 p-3 px-3 rounded-lg bg-white w-full flex justify-between">
        <div className=" flex justify-start">
          <div className="flex justify-left  w-10 pl-1 my-auto">
            <input
              onChange={handleCheckedStatus}
              checked={checked}
              type="checkbox"
              className="w-6 h-6 "
            />
          </div>
          <div className="flex flex-col pl-2 gap-3 ">
            <p className={title_classes}>{props.todo.title}</p>
            <p>{props.todo.time}</p>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <div
            role="button"
            onClick={handleDelete}
            className=" bg-gray-400 rounded-md cursor-pointer self-center p-2 flex justify-center"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
