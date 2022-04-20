import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function SideBar() {
  return (
    <aside className="w-full bg-white" aria-label="sidenavExample">
      <ul className="relative px-1">
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden hover:text-blue-600 hover:bg-blue-50 text-gray-700 text-ellipsis whitespace-nowrap rounded"
            href="#"
          >
            <HiOutlineHome className="w-5 h-5 ml-3" />

            <span>داشبورد</span>
          </a>
        </li>
        <li class="relative" id="sidenavSecEx2">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden  hover:text-blue-600 hover:bg-blue-50 text-gray-700 text-ellipsis whitespace-nowrap transition duration-300 ease-in-out cursor-pointer"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx2"
          >
            <HiOutlineDocumentText className="w-5 h-5 ml-3" />
            <span>مدیریت محتوا</span>
            <HiOutlineChevronDown className="w-3 h-3 mr-auto" />
          </a>
          <ul
            className="relative accordion-collapse collapse"
            id="collapseSidenavSecEx2"
            aria-labelledby="sidenavSecEx2"
            data-bs-parent="#sidenavSecExample"
          >
            <li class="relative">
              <a
                href="#"
                className="flex items-center text-xs py-4 pr-12 pl-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                انتشار محتوا
              </a>
            </li>
            <li className="relative">
              <a
                href="#!"
                className="flex items-center text-xs py-4 pr-12 pl-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
              >
                منتشر شده ها
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <hr class="my-2" />
    </aside>
  );
}
