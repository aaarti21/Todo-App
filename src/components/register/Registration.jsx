import React from 'react'
import './Registration.css'
import { useFormik } from 'formik'
import { Registerschema } from '../../schema'
import { useNavigate } from "react-router-dom";

const initialValues = {
    username:"",
    email:"",
    password:"",
    cpassword:"",
}

const Registration = () => {

    const nav = useNavigate();
    const { values,errors,handleChange, handleSubmit,touched } = useFormik({
      initialValues: initialValues,
      validationSchema:Registerschema,
      onSubmit: (values) => {
        console.log(values);
        localStorage.setItem("reg",JSON.stringify(values));
        nav("/Login");
      },
    });

  return (
    <>
       <div id="App">
       <div className="root">
          <div className="reg-dark">
            <h1>Register</h1>
            <p className="para">Let's create new account</p>
            <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username" className="font">
            Username:
              </label>
              <br />
              <input
                type="text"
                name="username"
                autoComplete="off"
                className="reg-input"
                value={values.username}
                onChange={handleChange}
              
              />
            {errors.username && touched.username ? (<p className="form-error">{errors.username}</p>):null}
              <label htmlFor="email" className="font">
                Email Address:
              </label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                className="reg-input"
                value={values.email}
                onChange={handleChange}
               
              />
             {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>):null}
              <br />
              <label htmlFor="password" className="font">
                Password:
              </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                  autoComplete="off"
                className="reg-input"
                value={values.password}
                onChange={handleChange}
             
              />
                {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>):null} 
             
               <label htmlFor="password" className="font">
               Confirm Password:
              </label>
              <br />
              <input
                type="password"
                name="cpassword"
                  autoComplete="off"
                className="reg-input"
                value={values.cpassword}
                onChange={handleChange}
                
              />
            {errors.cpassword && touched.cpassword ? (<p className="form-error">{errors.cpassword}</p>):null}
              <div className="center-text">
                <button className="reg-btn">Register</button>
              </div>
            </form>
          </div>
        </div>

       </div>
    </>
  )
}

export default Registration
