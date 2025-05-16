"use client";
import { StyleProvider } from "@ant-design/cssinjs";
import Navbar from "@/components/Navbar";
import React from "react";
const page = () => {
  return (
    <StyleProvider layer>
      <div className="flex flex-col">
        <Navbar />
      </div>
    </StyleProvider>
  );
};

export default page;
