import React, { createContext, useState } from "react";

export const myCotext = createContext();
function DataFetching({ children }) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("storagedata")) || []
  );
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <>
      <myCotext.Provider value={{ mode, toggleMode,data,setData }}>
        {children}
      </myCotext.Provider>
    </>
  );
}

export default DataFetching;
