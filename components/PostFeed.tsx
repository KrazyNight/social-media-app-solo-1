"use client"
import React, { useEffect, useState } from "react";
import PostInput from "./PostInput";
import Post from "./Post";
import { collection, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

export default function PostFeed() {

  // const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([]);

  // useEffect(() => {
  //   const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))

  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     const snapshotDocs = snapshot.docs


  //     setPosts(snapshotDocs)
  //   }) 
  // })

  const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])
  
  useEffect(() => {
    // do query 
    //fetch data/getDocs.onSnapshot
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = snapshot.docs

      setPosts(snapshotDocs)

    })
  })


  return (
    <>
      <div
        className="flex-grow border border-black 
    max-w-2xl
    "
      >
        <div
          className="py-4 px-3 text-lg sm:text-xl sticky top-0
        z-50 bg-white bg-opacity-80 backdrop-blur-sm font-bold
        
        border-b border-gray-400
        "
        >
          Home
        </div>
        <PostInput />


        {posts.map((post) => <Post
        key={post.id}
        data={post.data()}
        
        /> )}


        


{/* 
        {posts.map(post => <Post
        key={post.id}
        data={post.data()}
        
        />)} 
*/}





        {/* <Post />  */}
      </div>
    </>
  );
}
