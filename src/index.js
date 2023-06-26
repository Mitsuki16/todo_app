import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { create } from 'zustand'

// const App2 = () => {

// const useStore = create(set => ({
//   count: 1,
//   inc: () => set(state => ({ count: state.count + 1 })),
// }))

// function Controls() {
//   const inc = useStore(state => state.inc)
//   return <button onClick={inc}>one up</button>
// }

// function Counter() {
//   const count = useStore(state => state.count)
//   return <>{count}</>  
// }

//   return (
//     <div>
//       <h1 className=" text-2xl m-5 ">Click <Counter></Counter></h1>
//       <Controls></Controls>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
