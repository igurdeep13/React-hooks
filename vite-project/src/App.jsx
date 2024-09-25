// USE STATE HOOK

// import React, { useState } from "react";

// function App() {
//   const [car, setCar] = useState({
//     make: "ferrari",
//     model: "roma",
//     year: "2009",
//     color: "red",
//   });

//   function handleChange(e) {
//     setCar((prev)=>{
//       return {...prev, color: e.target.value}
//     });
//   }

//   return (
//     <>
//       <h1>
//         My fav Car is {car.color} {car.make} {car.model}
//       </h1>
//       <input
//         onChange={(e) => {
//           handleChange(e);
//         }}
//       />
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   return <>
//     <h1>{counter}</h1>
//     <button onClick={()=>{setCounter(counter+1)}}>+</button>
//     <button onClick={()=>{setCounter(counter-1)}}>-</button>
//   </>;
// }

// export default App;

// -------------USE EFFECT hook-------------
// import React, { useState, useEffect } from "react";

// function App() {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setValue((value) => value + 1);
//     }, 2000);
//   }, [value]);
//   return (
//     <>
//       <h1>I have rendered {value} times</h1>
//     </>
//   );
// }

// export default App;

// ---------------UseRef Hook-------------

// UseRef doesnot re-render the component when the state is changed
// UseRef is also used to manipulate the dom elements

// import React, { useState, useEffect, useRef } from "react";

// function App() {
//   const [value, setValue] = useState(0);
//   // const count = useRef(0);
//   const [count, setCount] = useState(0);

//   // useEffect(() => {
//   //   count.current = count.current + 1;
//   // });

//   useEffect(()=>{
//     setCount(count => count + 1)
//   },[value] )
//   return (
//     <>
//       <button
//         onClick={() => {
//           setValue((prev) => prev - 1);
//         }}
//       >
//         -
//       </button>
//       <h2>{value}</h2>
//       <button
//         onClick={() => {
//           setValue((prev) => prev + 1);
//         }}
//       >
//         +
//       </button>
//       <h2>Count: {count-1}</h2>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect, useRef } from "react";

function App() {
  const value = useRef();
  const btnClicked = () => {
    console.log(value.current);
    value.current.style.backgroundColor = "red"
  };
  return (
    <>
      <input type="text" ref={value} />
      <button onClick={btnClicked}>Click</button>
    </>
  );
}

export default App;
