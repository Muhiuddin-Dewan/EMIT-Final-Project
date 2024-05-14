import React from "react";
import Header from "./Header";
import Foot from "./Foot";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <main style={{ minHeight: "75vh" }}>{children}</main>
      <Toaster />
      <Foot></Foot>
    </div>
  );
};

export default Layout;
