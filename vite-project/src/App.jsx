import React, { useState } from "react";

function App() {
  const [car, setCar] = useState({
    make : "ferrari",
    model: "roma",
    year: "2009",
    color: "red"
  });

  return <>
    <h1>My fav Car is {car.make} {car.model}</h1>
    
  </>
}

export default App;
