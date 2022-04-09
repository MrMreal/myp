import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [menu, setMenu] = useState(true);
  const sidecss = menu
    ? "w-40 fixed right-0 bottom-0 top-14 bg-blue-300 mr-0"
    : "w-40 fixed right-0 bottom-0 top-14 bg-blue-300 -mr-40";

  const maincss = menu
    ? "flex flex-1 flex-col p-4 mr-40 bg-neutral-500"
    : "flex flex-1 flex-col p-4 mr-0 bg-neutral-500";

  return (
    <div>
      <div className="relative h-screen w-full bg-white">
        <div className="w-full h-14 fixed top-0 z-30 bg-red-300">
          <button
            className="border-2"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            open close
          </button>
        </div>
        <div className={sidecss}>c</div>
        <div className="h-full">
          <div className={maincss}>
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
            <div className="h-96">div</div>
            <div className="h-96">div</div>
          </div>
        </div>
      </div>
    </div>
  );
}
