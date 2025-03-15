import React, { useContext, useEffect, useState } from "react";
import "./Alltodo.css";
import { myCotext } from "../../context/DataFetching";
const Alltodo = () => {
  const [apiData, setApiData] = useState([]);
  const { mode } = useContext(myCotext);

  useEffect(() => {
    DataFetching();
  }, []);
  console.log({ apiData });

  const DataFetching = async () => {
    const respone = await fetch("https://dummyjson.com/todos");
    console.log({ respone });
    const data = await respone.json();
    setApiData(data.todos);
    console.log(data);
  };

  return (
    <>
      <div id={`${mode === "dark" ? "App" : "AppWhite"}`}>
        <div className="main-container">
          <div className={`${mode === "dark" ? "title" : "title-white-mode"}`}>
            <h4>List of ToDos</h4>
          </div>
          {apiData.map((item) => (
            <div className="container" key={item.id}>
              <div
                className={`${mode === "dark" ? "card-dark" : "card-white"}`}
              >
                <div className="todo-title">{item.todo}</div>
                <button
                  className={`${item.completed ? "completed" : "pending"}`}
                >
                  {`${item.completed ? "completed" : "pending"}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Alltodo;
