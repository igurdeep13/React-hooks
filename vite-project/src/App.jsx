import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useReducer,
  useLayoutEffect,
} from "react";

function App() {
  useEffect(() => {
    console.log("Message from useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("Message from useLayout");
  }, []);
  return (
    <>
      {setTimeout(() => {
        <h2>Test Message</h2>;
      }, 3000)}
    </>
  );
}

export default App;
