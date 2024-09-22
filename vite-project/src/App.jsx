import React, { useEffect, useState, useRef, useMemo } from "react";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Here
      </button>
    </>
  );
}

export default App;
