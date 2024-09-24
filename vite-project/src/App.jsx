import React, { useState } from "react";

function App() {
  const [color, changeColor] = useState("red")

  return <>
    <h1>My fav color is {color}!</h1>
    <button onClick={()=>{changeColor("blue")}}>Blue</button>
  </>
}

export default App;
