import React from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import Sidebar from "../includes/Sidebar";

function LayoutMaster({ children }) {

  return (
    <>
      <Header />
      <Sidebar />
      { children }
      
      <Footer />
    </>
  );
}

export default LayoutMaster;
