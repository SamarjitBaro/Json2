import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState();
  const increase = () => {
    setCount((prevCount) => {
      const val = prevCount + 1;
      if (val == 14) {
        bg();
      }
      return val;
    });
  };
  function bg() {
    setColor("olive");
  }

  return (
    <>
      <div
        className=" mt-10 max-w-2xl m-0 mx-auto rounded-2xl flex flex-col items-center justify-center w-full bg- bg-yellow-200"
        style={{ background: color }}
      >
        <h1 className=" m-10 text-white text-center w-56 bg-green-400 ">
          Count {count}
        </h1>
        <button
          className=" w-20 bg-blue-400 rounded text-white"
          onClick={increase}
        >
          increase
        </button>
      </div>
    </>
  );
}

export default App;
