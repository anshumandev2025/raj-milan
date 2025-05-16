"use client";
import React from "react";
import { Logo } from "../Logo";
import { navBarItems } from "@/constants/layoutContant";
import Link from "next/link";
import { Button } from "antd";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && openMenu) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openMenu]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openMenu]);

  return (
    <>
      <div className="flex h-20 items-center justify-between px-5 relative z-10">
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
            <Button
              onClick={() => router.push("/auth/login")}
              className="text-primary font-bold border-primary"
            >
              Login
            </Button>
            <Button
              onClick={() => router.push("/auth/signup")}
              className="bg-primary font-bold text-white"
            >
              Signup
            </Button>
          </div>
          <div
            onClick={() => setOpenMenu((prev) => !prev)}
            className="md:hidden cursor-pointer p-2"
          >
            {openMenu ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 md:hidden ${
          openMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenMenu(false)}
      />

      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button onClick={() => setOpenMenu(false)} className="p-2">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col items-center mt-8 space-y-6">
            {navBarItems.map((elem, index) => (
              <Link
                className="text-gray-700 hover:text-primary font-medium text-lg"
                key={index}
                href={elem.link}
                onClick={() => setOpenMenu(false)}
              >
                {elem.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center mt-12 space-y-4 px-6">
            <Button
              className="text-primary font-bold border-primary w-full"
              onClick={() => setOpenMenu(false)}
            >
              Login
            </Button>
            <Button
              className="bg-primary font-bold text-white w-full"
              onClick={() => setOpenMenu(false)}
            >
              Signup
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
