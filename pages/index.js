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
    ? "w-64 fixed right-0 overflow-y-scroll bottom-0 top-16 bg-white shadow mr-0 transition-all duration-1000"
    : "w-64 fixed right-0 overflow-y-scroll bottom-0 top-16 bg-white shadow -mr-40 transition-all duration-1000 translate-x-40";

  const maincss = menu
    ? "flex flex-1 flex-col mt-16 p-4 mr-64 bg-gray-100 space-y-4 transition-all duration-1000"
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
          <aside className="w-64 bg-white" aria-label="sidenavExample">
            <div class="pt-4 pb-2 px-6">
              <a href="#!">
                <div class="flex items-center">
                  <div class="shrink-0"></div>
                  <div class="grow ml-3">
                    <p class="text-sm font-semibold text-blue-600">
                      Jason McCoel
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <ul class="relative px-1">
              <li class="relative">
                <a
                  class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded"
                  href="#!"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="w-3 h-3 mr-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                    ></path>
                  </svg>
                  <span>Non-collapsible link</span>
                </a>
              </li>
              <li class="relative" id="sidenavSecEx2">
                <a
                  class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSidenavSecEx2"
                  aria-expanded="false"
                  aria-controls="collapseSidenavSecEx2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="w-3 h-3 mr-3"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                    ></path>
                  </svg>
                  <span>Collapsible item 1</span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="w-3 h-3 ml-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                    ></path>
                  </svg>
                </a>
                <ul
                  class="relative accordion-collapse collapse"
                  id="collapseSidenavSecEx2"
                  aria-labelledby="sidenavSecEx2"
                  data-bs-parent="#sidenavSecExample"
                >
                  <li class="relative">
                    <a
                      href="#!"
                      class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="primary"
                    >
                      Link 1
                    </a>
                  </li>
                  <li class="relative">
                    <a
                      href="#!"
                      class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="primary"
                    >
                      Link 2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <hr class="my-2" />
          </aside>
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
