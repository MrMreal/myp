import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import MainLayout from "../components/MainLayout";

export default function Home() {
  const [menu, setMenu] = useState(true);
  const handelMenu = () => setMenu(!menu);

  const sidecss = menu
    ? "w-48 fixed right-0 overflow-y-scroll bottom-0 top-16 bg-white shadow mr-0 transition-all duration-1000"
    : "w-48 fixed right-0 overflow-y-scroll bottom-0 top-16 bg-white shadow -mr-40 transition-all duration-1000 translate-x-40";

  const maincss = menu
    ? "flex flex-1 flex-col mt-16 p-4 mr-48 bg-gray-100 space-y-4 transition-all duration-1000"
    : "flex flex-1 flex-col mt-16 p-4 mr-0 bg-gray-100 space-y-4 transition-all duration-1000";

  return (
    <div>
      <div className="relative h-screen w-full bg-white">
        <Header onClickMenu={handelMenu} />
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
