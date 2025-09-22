import { ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { DocumentData, Timestamp } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import Moment from "react-moment"
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { openCommentModal, setCommentDetails } from "@/redux/slices/modalSlice";
import Link from "next/link";

interface PostProps {
  data: DocumentData,
  id: string
}


export default function Post({ data, id }: PostProps) {
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <div className="border-b border-gray-400">

        <Link href="/ + id" >

          <PostHeader
          name={data.name}
          username={data.username}
          timestamp= {data.timestamp}
          text={data.text}  
          />
        </Link>


        <div className="ml-16 p-3 flex space-x-14 " >
            <div className="relative" >
                <ChatBubbleOvalLeftEllipsisIcon 
                className="w-[22px] h-[22px] cursor-pointer
                hover:text-[#F4AF01] transition "
                
                onClick={() => {
                  dispatch(setCommentDetails({
                    name: data.name,
                    username: data.username,
                    id: id,
                    text: data.text,
                  }))
                  dispatch(openCommentModal())}}
                />
                <span className="absolute text-xs top-1 -right-3 " >
                    2
                </span>
            </div>

            <div className="relative" >
                <HeartIcon 
                className="w-[22px] h-[22px] cursor-pointer
                hover:text-[#F4AF01] transition "
                />
                <span className="absolute text-xs top-1 -right-3 " >
                    2
                </span>
            </div>

            <div className="relative" >
                <ChartBarIcon
                className="w-[22px] h-[22px] cursor-not-allowed
                hover:text-[red] transition  
                "
                />
            </div>

            <div className="relative" >
                <ArrowUpTrayIcon 
                className="w-[22px] h-[22px] cursor-not-allowed
                hover:text-[red] transition  
                "
                />
            </div>

        </div>




      </div>
    </>
  );
}





interface PostHeaderProps {
  name: string,
  username: string,
  timestamp?: Timestamp,
  text: string,
  ReplyTo?: string,
}


export function PostHeader({ name, username, timestamp, text, ReplyTo}: PostHeaderProps) {
  return (
    <>
      <div className="flex p-3 space-x-5 ">
        <Image
          src="/assets/profile-pic.png"
          width={44}
          height={44}
          alt="Profile-Pic"
          className="w-11 h-11"
        />

        <div className="text-[15px] flex flex-col space-y-2 " >
          <div className="flex space-x-2 text-[#707E89] " >
            <span className="font-bold text-black
            inline-block whitespace-nowrap overflow-hidden text-ellipsis 
            max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px]
            sm:max-w-[160p]
            ">{name}</span>
            <span
            className="
            inline-block whitespace-nowrap overflow-hidden text-ellipsis 
            max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px]
            sm:max-w-[160p]
            "
            >@{username}</span>
            <span> · </span>
            
            {
              timestamp &&

            <Moment fromNow>
              {timestamp.toDate()}
            </Moment>
            }



{/* 
            {
              timestamp &&
              
            <Moment fromNow >
            {timestamp.toDate()}
            </Moment>

            } */}


          </div>

          <span>{text}</span>
          {
            ReplyTo &&
            <span className="text-[#707E89]">Replying to <span className=" text-[#F4AF01] ">@{ReplyTo}</span></span>

          }

        </div>


      </div>
    </>
  );
}
