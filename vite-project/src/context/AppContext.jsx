import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+1 123456789";
  return (
    <AppContext.Provider value={phone}>{props.childern}</AppContext.Provider>
  );
};

export default ContextProvider 