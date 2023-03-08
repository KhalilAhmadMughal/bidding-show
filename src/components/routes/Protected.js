import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin === "false") {
      navigate("/");
      console.log("only admin can access admin page!");
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
