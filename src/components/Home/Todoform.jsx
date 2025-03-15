import React, { useContext, useEffect, useState } from "react";
import "./Todoform.css";
import { myCotext } from "../../context/DataFetching";
const Todoform = ({
  dataFromhandler,
  isEdit,
  editData,
  setData,
  data,
  onedit,
}) => {
  // const [inputtext, setinputTitle] = useState("");
  const [allData, setAlldata] = useState({ inputtext: "" });
  const { mode } = useContext(myCotext);

 

  const inputChangeHandler = (e) => {
    // setinputTitle(e.target.value);
    const { name, value } = e.target;
    setAlldata((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (allData.inputtext === "") {
      return;
    }
    dataFromhandler(allData);
    setAlldata({ inputtext: "" });
  };
  // useEffect(()=>{
  //   setAlldata((prev)=>{return{...prev, inputtext:editData[0]?.inputtext}})
  // },[editData])
  useEffect(() => {
    setAlldata((prev) => {
      return { ...prev, inputtext: editData[0]?.inputtext };
    });
  }, [editData]);

  const editHandler = (e) => {
    e.preventDefault();
    const formdata = [...editData];
    const index = data.findIndex((i) => i.id === formdata[0].id);
    data[index] = { id: formdata[0].id, inputtext: allData.inputtext };
    setData(data);
    localStorage.setItem("storagedata", JSON.stringify(data));
    onedit(data);
    setAlldata({ inputtext: "" });
  };
  // const editHandler=()=>{
  //   const fromdata=[...editdata];
  //   const index= data.findIndex((i)=>{i.id===formdata[0].id});
  //   data[index]={id:fromdata[0].id,inputtext:allData.inputtext};
  //   setData(data);
  //    localStorage.setItem("storagedata",JSON.stringify(data));
  //    onedit(data);
  //    setAlldata({inputtext:""})
  // }

  return (
    <>
      <div className="form-container">
        <form
          action=""
          onSubmit={isEdit ? editHandler : submitHandler}
          className="todo-form-flex"
        >
          <div>
            <input
              type="text"
              value={allData.inputtext}
              onChange={inputChangeHandler}
              className="input-task"
              placeholder="Enter Your task..."
              id="task"
              name="inputtext"
            />
          </div>
          <div>
            <button className="btn-add"   disabled={allData.inputtext === ""}>{isEdit ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Todoform;
