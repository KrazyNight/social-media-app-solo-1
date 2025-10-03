"use client";

import { db } from "@/firebase";
import { closeCommentModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import { updateProfile } from "firebase/auth";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface PostInputProps {
  insideModal?: boolean;
}

export default function PostInput({ insideModal }: PostInputProps) {
  const [text, setText] = useState("");
  const user = useSelector((state: RootState) => state.user);
  const commentDetails = useSelector(
    (state: RootState) => state.modals.commentPostDetails
  );
  const dispatch: AppDispatch = useDispatch();

// #  4 Send Comment 
  // async function sendComment() {
  //   const postRef = doc(db, "posts", commentDetails.id);

  //   await updateDoc(postRef, {
  //     comments: arrayUnion({
  //       name: user.name,
  //       username: user.username,
  //       text: text,
  //     }),
  //   });
  //   setText("");
  //   dispatch(closeCommentModal());
  // }
  //

  async function sendComment() {
    const postRef = doc(db, "posts", commentDetails.id )
    
    await updateDoc(postRef, {
      commnets: arrayUnion({
        name: user.name,
        username: user.username,
        text: text
      })
    })
    setText("");
    dispatch(closeCommentModal());
  }






//#1 send post

//   async function sendPost() {
//     await addDoc(collection(db, "posts"), {
//       text: text,
//       name: user.name,
//       username: user.username,
//       timestamp: serverTimestamp(),
//       likes: [],
//       comments: [],
//     });

//     setText("");
//   }
// //

  async function sendPost() {
    await addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: [],

    })
    setText("")
  }

  return (
    <>
      <div
        className="flex space-x-5 p-3
    border-b border-gray-400
    "
      >
        <Image
          src={
            insideModal
              ? "/assets/profile-pic.png"
              : "/assets/busybee-logo2.png"
          }
          width={44}
          height={44}
          alt={insideModal ? "ProFile Picture" : "Logo"}
          className="w-11 h-11"
        />
        <div className="w-full ">
          <textarea
            className="resize-none w-full
            min-h-[50px] text-lg
            border-b border-gray-400 outline-none
            "
            placeholder={insideModal ? "Send your reply" : "What's happening!?"}
            onChange={(event) => setText(event.target.value)}
            value={text}
          />

          <div className="flex justify-between pt-2">
            <div className="flex space-x-1.5">
              <PhotoIcon className="w-[22px] h-[22px] text-[#F4AF01] " />
              <ChartBarIcon className="w-[22px] h-[22px] text-[#F4AF01] " />
              <FaceSmileIcon className="w-[22px] h-[22px] text-[#F4AF01] " />
              <CalendarIcon className="w-[22px] h-[22px] text-[#F4AF01] " />
              <MapPinIcon className="w-[22px] h-[22px] text-[#F4AF01] " />
            </div>
            <button
              className="bg-[#F4AF01] text-white w-[80px] h-[36px] rounded-full
                text-sm cursor-pointer
                "
              onClick={() => (insideModal ? sendComment() : sendPost())}
            >
              Bumble
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
