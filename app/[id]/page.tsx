import CommentModal from "@/components/modals/CommentModal";
import PostFeed from "@/components/PostFeed";
import Sidebar from "@/components/Sidebar";
import SignUpPrompt from "@/components/SignUpPrompt";
import Widgets from "@/components/Widgets";
import {
  ArrowLeftIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div
        className="text-[#0F1419] min-h-screen 
          max-w-[1400px] mx-auto border-2 border-black
          flex
          
          "
      >
        <Sidebar />

        <div
          className="flex-grow border border-black 
                max-w-2xl
                "
        >
          <div
            className="py-4 px-3 text-lg sm:text-xl sticky top-0
                    z-50 bg-white bg-opacity-80 backdrop-blur-sm font-bold
                    
                    border-b border-gray-400
                    flex
                    "
          >
            <Link href="/">
              <ArrowLeftIcon className="w-5 h-5  mr-10" />
            </Link>
            Bumble
          </div>





          <div className="flex flex-col p-3 space-y-5 border-b border-gray-300 ">
            <div className="flex justify-between items-center mb-1.5  ">

              <div className="flex space-x-3   ">
                <Image
                  src={"/assets/profile-pic.png"}
                  width={44}
                  height={44}
                  alt="Profile Picture"
                  className="w-11 h-11"
                />

                <div className="flex flex-col text-[15px]  ">
                  <span
                    className="font-bold
                        inline-block whitespace-nowrap overflow-hidden text-ellipsis 
                        max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px]
                        sm:max-w-[160p]
                        "
                  >
                    Name
                  </span>
                  <span
                    className="text-[#707E89] 
                        inline-block whitespace-nowrap overflow-hidden text-ellipsis 
                        max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px]
                        sm:max-w-[160p]
                        "
                  >
                    @Username
                  </span>
                </div>

              </div>

              <EllipsisHorizontalIcon className="w-5 h-5" />
            </div>
            <span className="text-[15px] ">TEXT</span>
          </div>


          <div className="border-b border-gray-100 p-3 text-[15px] ">
            <span className="font-bold ">0</span> Likes
          </div>



          <div
            className="border-b border-gray-300 p-3 text-[15px]
            flex justify-evenly
            "
            >
            <ChatBubbleOvalLeftEllipsisIcon
              className="w-[22px] h-[22px]
            text-[#707E89] cursor-not-allowed 
              "
            />
            <HeartIcon
              className="w-[22px] h-[22px]
            text-[#707E89] cursor-not-allowed 
              "
            />
            <ChartBarIcon
              className="w-[22px] h-[22px]
            text-[#707E89] cursor-not-allowed 
              "
            />
            <ArrowUpTrayIcon
              className="w-[22px] h-[22px]
            text-[#707E89] cursor-not-allowed 
              "
            />

          </div>




          

















        </div>

        <Widgets />
      </div>
      <SignUpPrompt />
    </>
  );
}
