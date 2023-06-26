import React, { useState,useRef } from 'react';

function TaskPopup(props) {
  const [title,setTitle] = useState('');
  const [status,setStatus] = useState('');
  const [validateText,setvalidateText] = useState('');
  const inputEl = useRef(null);

  const titleHandle = (event) =>{
    setTitle(event.target.value)
  }

  const statusHandle = (event) =>{
    setStatus(event.target.value)
  }

  const handleAdd = (event) =>{
    if(title.toString().trim().length === 0 && status.toString().trim().length === 0){
      setvalidateText("Enter Correct Values")
      return
    }
    if(title.toString().trim().length === 0){
      setvalidateText("Enter Correct Title")
      return
    }
    else if(status.toString().trim().length === 0){
      setvalidateText("Select Correct Status")
      return
    }
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();
    let hours = currentDate.getHours();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const data = {
      "title":title.toString().trim(),
      "status":status.toString().trim(),
      time: `${day}-${month}-${year} ${hours}:${minutes}:${seconds} ${amOrPm}`
    }
    props.onAdd(data)
    inputEl.current.click()
    setStatus('')
    setTitle('')
    setvalidateText('')
  }

    return (
      <div>
        <div>
          <input
            type="checkbox"
            id="todo-item-add"
            className="modal-toggle"
          />
          <label
            htmlFor="todo-item-add"
            className="modal cursor-pointer"
          >
            <label className="modal-box max-w-[40pc]" htmlFor="">
              <h3 className="text-lg font-bold">Add TODO</h3>
              <div className="py-4">
                <p className="text-lg">Title</p>
                <input
                  type="text"
                  className="bg-gray-300 p-1.5 rounded-lg w-full"
                  value={title}
                  onChange={titleHandle}
                />
              </div>
              <div className="py-1">
                <p className="text-lg">Status</p>
                <select
                  name="status"
                  id="status"
                  className=" bg-gray-300 p-3 rounded-lg w-full"
                  value={status}
                  onChange={statusHandle}
                >
                  <option value=""></option>
                  <option value="incompleted">InCompleted</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <h2 className="text-lg mt-3 font-bold text-red-500">{validateText}</h2>
              <div className="my-2 pt-4 flex justify-start gap-6">
                <button onClick={handleAdd} className=" bg-indigo-500 text-white rounded-lg font-light p-1 text-lg lg:w-40 w-32 ">
                  Add Task
                </button>
                <label ref={inputEl}
                  htmlFor="todo-item-add"
                  className=" bg-indigo-500 cursor-pointer text-white rounded-lg font-light p-1 text-center text-lg lg:w-40 w-32 "
                >
                  Close
                </label>
              </div>
            </label>
          </label>
        </div>
      </div>
    );
}

export default TaskPopup;