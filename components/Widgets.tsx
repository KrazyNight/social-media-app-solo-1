import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export default function Widgets() {
  return (
    <>
      <div
        className="p-3
    flex flex-col space-y-4 w-[400px] 
    "
      >
        <div
          className="bg-[#EFF3F4]
        text-[#89959D] h-[44px]
        flex items-center space-x-3
        rounded-full pl-5  "
        >
          <MagnifyingGlassIcon className="w-[20px] h-[20px] " />
          <input
            type="text"
            placeholder="Search Bar Busy Bee"
            className="bg-transparent outline-none"
          />
        </div>

        <div
          className=" bg-[#EFF3F4] 
        rounded-xl p-3
        "
        >
          <h1
            className="text-xl
          font-bold p-3 mb-4
          "
          >
            What's happening
          </h1>

          <div className="flex flex-col py-3">
            <div
              className="flex justify-between
            text-[#536471]
            text=[13px]
            "
            >
              <span>Trending in Austalia </span>
              <EllipsisHorizontalIcon className="w-[20px] " />
            </div>
            <span
              className="font-bold
            text-md
            "
            >
              #ReactJS
            </span>

            <span
              className="text-[#536471] 
            text-xs
            "
            >
              240k Bumbles
            </span>
          </div>

          <div className="flex flex-col py-3">
            <div
              className="flex justify-between
            text-[#536471]
            text=[13px]
            "
            >
              <span>Trending in Austalia </span>
              <EllipsisHorizontalIcon className="w-[20px] " />
            </div>
            <span
              className="font-bold
            text-md
            "
            >
              #ReactJS
            </span>

            <span
              className="text-[#536471] 
            text-xs
            "
            >
              240k Bumbles
            </span>
          </div>

          <div className="flex flex-col py-3">
            <div
              className="flex justify-between
            text-[#536471]
            text=[13px]
            "
            >
              <span>Trending in Austalia </span>
              <EllipsisHorizontalIcon className="w-[20px] " />
            </div>
            <span
              className="font-bold
            text-md
            "
            >
              #ReactJS
            </span>

            <span
              className="text-[#536471] 
            text-xs
            "
            >
              240k Bumbles
            </span>
          </div>

          <div className="flex flex-col py-3">
            <div
              className="flex justify-between
            text-[#536471]
            text=[13px]
            "
            >
              <span>Trending in Austalia </span>
              <EllipsisHorizontalIcon className="w-[20px] " />
            </div>
            <span
              className="font-bold
            text-md
            "
            >
              #ReactJS
            </span>

            <span
              className="text-[#536471] 
            text-xs
            "
            >
              240k Bumbles
            </span>
          </div>

          <div className="flex flex-col py-3">
            <div
              className="flex justify-between
            text-[#536471]
            text=[13px]
            "
            >
              <span>Trending in Austalia </span>
              <EllipsisHorizontalIcon className="w-[20px] " />
            </div>
            <span
              className="font-bold
            text-md
            "
            >
              #ReactJS
            </span>

            <span
              className="text-[#536471] 
            text-xs
            "
            >
              240k Bumbles
            </span>
          </div>
        </div>

        <div className=" bg-[#EFF3F4] rounded-xl p-3">

          <h1 className="text-xl font-bold mb-2 ">Who to Follow</h1>

          <div className="flex justify-between items-center py-3 ">
            <div className="flex items-center space-x-3 ">
              <Image
                src="/assets/erik.jpg.jpg"
                height={56}
                width={56}
                alt="Profile Picture of Erik"
                className="w-14 h-14 rounded-full
            
            "
              />
              <div className="flex flex-col text-sm ">
                <span className="font-bold ">Erik Reynoso</span>
                <span>@erikcode</span>
              </div>
            </div>

            <button
            className="bg-[#0F1419] text-white w-[72px]
            h-[40px] rounded-full 
            "
            >Follow</button>
          </div>

          <div className="flex justify-between items-center py-3 ">
            <div className="flex items-center space-x-3 ">
              <Image
                src="/assets/erik.jpg.jpg"
                height={56}
                width={56}
                alt="Profile Picture of Erik"
                className="w-14 h-14 rounded-full
            
            "
              />
              <div className="flex flex-col text-sm ">
                <span className="font-bold ">Erik Reynoso</span>
                <span>@erikcode</span>
              </div>
            </div>

            <button
            className="bg-[#0F1419] text-white w-[72px]
            h-[40px] rounded-full 
            "
            >Follow</button>
          </div>

          <div className="flex justify-between items-center py-3 ">
            <div className="flex items-center space-x-3 ">
              <Image
                src="/assets/erik.jpg.jpg"
                height={56}
                width={56}
                alt="Profile Picture of Erik"
                className="w-14 h-14 rounded-full
            
            "
              />
              <div className="flex flex-col text-sm ">
                <span className="font-bold ">Erik Reynoso</span>
                <span>@erikcode</span>
              </div>
            </div>

            <button
            className="bg-[#0F1419] text-white w-[72px]
            h-[40px] rounded-full 
            "
            >Follow</button>
          </div>

        </div>
      </div>
    </>
  );
}
