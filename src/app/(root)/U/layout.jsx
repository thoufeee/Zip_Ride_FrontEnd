import Navbar from "@/components/user/Navbar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="">
      <div><Navbar /></div>
      <div>{children}</div>
    </div>
  );
}
