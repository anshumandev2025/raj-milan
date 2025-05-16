import React from "react";
import { Logo } from "./Logo";
import { navBarItems } from "@/constants/layoutContant";
import Link from "next/link";
import { Button } from "antd";

const Navbar = () => {
  return (
    <div className="flex h-20 items-center justify-between px-5">
      <Logo />
      <div className="flex items-center gap-5">
        <div className="gap-9 hidden md:flex">
          {navBarItems.map((elem, index) => (
            <Link
              className="text-gray-700 hover:text-primary font-medium"
              key={index}
              href={elem.link}
            >
              {elem.name}
            </Link>
          ))}
        </div>
        <div className="gap-5 hidden md:flex">
          <Button className="text-primary font-bold border-primary">
            Login
          </Button>
          <Button className="bg-primary font-bold text-white">Signup</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
