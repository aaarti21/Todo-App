import React from "react";
import Navbar from "../components/Navbar/Navbar";

function ErrorPage() {
  return (
    <>
      <Navbar/>
      <div style={{ color: "red", textAlign: "center"}}>
        <h1>404</h1>
        <h1> Page Not found</h1>
      </div>
    </>
  );
}

export default ErrorPage;
