"use client";

import { closeLogInModal, closeSignUpModal, openSignUpModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";
import { signInUser } from "@/redux/slices/userSlice";

export default function SignUpModal() {
  const [showPassword, setShowPassord] = useState(false);
  const isOpen = useSelector((state: RootState) => state.modals.signUpModalOpen);
  const dispatch: AppDispatch = useDispatch();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // async function handleSignUp() {
  //   const userCredentails = await createUserWithEmailAndPassword(
  //     auth,
  //     email,
  //     password,
  //   )
  // }


  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (!currentUser) return

  //     //redux
  //     dispatch(signInUser({
  //       name: "",
  //       username: "",
  //       email: "",
  //       uid: "",
  //     }))

  //   })
  //   return unsubscribe
  // }, [])

  async function handleLogInGuest() {
      const unsubscribed = await signInWithEmailAndPassword(
        auth,
        "guest123456789@gmail.com",
        "123456789"
      )
    }



  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
    );

    await updateProfile(userCredentials.user, {
      displayName: name,
    });


    dispatch(signInUser({
      name: userCredentials.user.displayName ,// inside currentUser, "displayName: null "

      username: userCredentials.user.email!.split("@")[0],
      uid: userCredentials.user.uid,
      email: userCredentials.user.email,
    }))

  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return

      //redux
      dispatch(signInUser({

        name: currentUser.displayName ,// inside currentUser, "displayName: null "

        username: currentUser.email!.split("@")[0],
        uid: currentUser.uid,
        email: currentUser.email,
      }
      ))
    } 
    )
    return unsubscribed

  }, [])




  return (
    <>
      <button
        className="w-full h-[48px] md:w-[88px] md:h-[40px] text-sm font-bold bg-white
            rounded-full
            "
        onClick={() => dispatch(openSignUpModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-full h-full px-0 sm:w-[600px] sm:h-fit sm:px-1 bg-white
        sm:rounded-xl
        "
        >
          <XMarkIcon
            className="w-7 mt-5 ml-5 cursor-pointer"
            onClick={() => dispatch(closeSignUpModal())}
          />
          <div className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10 ">Create Your account</h1>
            <div className=" w-full space-y-5 mb-10  ">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[54px] border border-gray-300 
                    outline-none pl-3 rounded-[4px] focus:border-[#f4af01]
                    transition 
                    "
                onChange={(event) => setName(event.target.value)}
                value={name}

              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[54px] border border-gray-300 
                    outline-none pl-3 rounded-[4px] focus:border-[#f4af01]
                    transition 
                    "
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />

              <div
                className="w-full h-[54px] border border-gray-300 
                    outline-none rounded-[4px] focus-within:border-[#f4af01]
                    transition flex items-center overflow-hidden pr-3
                    "
              >
                <input type={showPassword ? "text" : "password"} 
                placeholder="Password"
                className="w-full h-full pl-3 outline-none "

                onChange={(event) => setPassword(event.target.value)}
                value={password}

                />
                <div className="w-7 h-7 text-gray-400 cursor-pointer"
                onClick={() => setShowPassord(!showPassword)}
                >
                    {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </div>
              </div>

              
            </div>

            
              <button
                className="w-full h-[48px] text-sm font-bold mb-5 bg-[#f4af01]
                rounded-full
                "
                onClick={() => {
                  
                  handleSignUp()
                }}

                //"RUN" the handleSignUp(), will link to firebase auth
              >
                <span className="text-white ">Sign Up</span>
              </button>
              <span className="mb-5 text-sm text-center block "> Or </span>
              <button
                className="w-full h-[48px] text-sm font-bold bg-[#f4af01]
                rounded-full
                "
                onClick={() => handleLogInGuest()}
              >
                <span className="text-white ">Log In as Guest</span>
              </button>
          

          </div>
        </div>
      </Modal>
    </>
  );
}
