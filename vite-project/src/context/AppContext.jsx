import { createContext } from "react";

export const AppContext = createContext();

export default function ContextProvider(props) {
  const phone = "+1 123456789";
  return (
    <AppContext.Provider value={phone}>{props.children}</AppContext.Provider>
  );
}
