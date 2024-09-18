import { useState } from "react";

function App() {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
  });

  function handleClick() {
    setCar((prev)=>{
      return {...prev, model: "Autobio"}
    })
  }

  return (
    <>
      <h2>My favourite car is {car.brand}</h2>
      <h2>
        It is a {car.model} {car.year}
      </h2>
      <button onClick={handleClick}>Change your car</button>
    </>
  );
}

export default App;
