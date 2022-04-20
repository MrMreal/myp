import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineCog } from "react-icons/hi";

import { HiOutlineUser } from "react-icons/hi";
import SideBar from "../components/SideBar";
import MainLayout from "../components/MainLayout";

export default function Home() {
  const [menu, setMenu] = useState(true);
  const sidecss = menu
    ? "w-48 fixed right-0 overflow-y-scroll bottom-0 top-16 bg-white shadow mr-0 transition-all duration-1000"
    : "w-48 fixed right-0 overflow-y-scroll bottom-0 top-16 bg-white shadow -mr-40 transition-all duration-1000 translate-x-40";

  const maincss = menu
    ? "flex flex-1 flex-col mt-16 p-4 mr-48 bg-gray-100 space-y-4 transition-all duration-1000"
    : "flex flex-1 flex-col mt-16 p-4 mr-0 bg-gray-100 space-y-4 transition-all duration-1000";

  return (
    <div>
      <div className="relative h-screen w-full bg-white">
        <div className="w-full h-16 fixed top-0 z-30 bg-white shadow">
          <div className="flex justify-between items-center h-full p-2">
            <div className="flex">
              <HiOutlineMenu
                className="w-7 h-7 hover:cursor-pointer hover:text-red-500"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            </div>
            <div className="hidden sm:flex font-semibold text-3xl ">
              Alvanian
            </div>
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

              <div class="dropdown relative">
                <HiOutlineUser
                  className="w-7 h-7 hover:cursor-pointer hover:text-red-500 "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="dropdownMenuButton1"
                />
                <ul
                  class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      href="#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={sidecss}>
          <SideBar />
        </div>
        <div className="h-full">
          <div className={maincss}>
            <MainLayout />
          </div>
        </div>
      </div>
    </div>
  );
}
