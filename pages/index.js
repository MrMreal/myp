import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineCog } from "react-icons/hi";

export default function Home() {
  const [menu, setMenu] = useState(true);
  const sidecss = menu
    ? "w-32 fixed right-0 bottom-0 top-12 mt-4 bg-white shadow-md mr-0 transition-all duration-1000"
    : "w-32 fixed right-0 bottom-0 top-12 mt-4 bg-white shadow-md -mr-40 transition-all duration-1000 translate-x-40";

  const maincss = menu
    ? "flex flex-1 flex-col mt-12 p-4 mr-32 bg-gray-100 space-y-4 transition-all duration-1000"
    : "flex flex-1 flex-col mt-12 p-4 mr-0 bg-gray-100 space-y-4 transition-all duration-1000";

  return (
    <div>
      <div className="relative h-screen w-full bg-white">
        <div className="w-full h-12 fixed top-0 z-30 bg-white shadow-md">
          <div className="flex justify-between items-center m-2">
            <div className="flex">
              <HiOutlineMenu
                className="w-7 h-7 hover:cursor-pointer hover:text-red-500"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </div>
            <div className="flex font-semibold text-3xl ">Alvanian</div>
            <div className="flex gap-2">
              <HiOutlineBell
                className="w-7 h-7 hover:cursor-pointer hover:text-red-500"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
              <HiOutlineCog
                className="w-7 h-7 hover:cursor-pointer hover:text-red-500"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
              <HiOutlineMenu
                className="w-7 h-7 hover:cursor-pointer hover:text-red-500"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </div>
          </div>
        </div>
        <div className={sidecss}>
          <div className="flex flex-col justify-between items-center space-y-4">
            <div className="">
              <HiOutlineMenu
                className="w-7 h-7 hover:cursor-pointer hover:text-red-500"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </div>
            <div className="">
              <HiOutlineMenu
                className="w-7 h-7 hover:cursor-pointer hover:text-red-500"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className={maincss}>
            <div className="h-96 bg-white shadow-md rounded-xl p-4">div</div>
            <div className="h-96 bg-white shadow-md rounded-xl">div</div>
            <div className="h-96">div</div>
            <div className="h-96">div</div>
            <div className="h-96">div</div>
            <div className="h-96">div</div>
            <div className="h-96">div</div>
            <div className="h-96">div</div>
            <div className="h-96">div</div>
            <div className="h-96">div</div>
            <div className="h-96">div</div>
            <div className="h-96">div</div>
          </div>
        </div>
      </div>
    </div>
  );
}
