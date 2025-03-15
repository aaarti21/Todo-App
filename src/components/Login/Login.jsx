import React from "react";
import "./Login.css";
import { useFormik } from "formik";
import { loginschema } from "../../schema";
import { useNavigate } from "react-router-dom";

const initialValues = { username: "", password: "" };
const Login = () => {
  const userdata=JSON.parse(localStorage.getItem(""));
  console.log(userdata);
  const { values, errors, handleChange, handleSubmit,  touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginschema,
      onSubmit: (values,action) => {
       
        console.log(values);
        if(
          userdata.email === values.email &&
          userdata.password === values.password
        ){ 
          localStorage.setItem("login",JSON.stringify(values));
          action.resetForm();
        
        }
        else(
          alert("Invalid credentials")
        )
       
      },
    });
  return (
    <>
      <div id="App">
        <div className="root">
          <div className="login-dark">
            <h1>Login</h1>
            <p className="para">Welcome back !!</p>

            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="email" className="font">
                Email Address:
              </label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                className="login-email-input"
                placeholder="john@doe.com"
                value={values.email}
                onChange={handleChange}
               
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
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
                className="login-pwd-input"
                placeholder="Your Password"
                value={values.password}
                onChange={handleChange}
         
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
              <div className="text-center">
                <button className="login-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
