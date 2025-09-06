"use client"

import { closeLogInModal, openLogInModal } from '@/redux/slices/modalSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Modal } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function LogInModal() {
    
  const [showPassword, setShowPassord] = useState(false);


  const isOpen = useSelector(
    (state: RootState) => state.modals.logInModalOpen
  );
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <button
        className="w-full h-[48px] md:w-[88px] md:h-[40px] text-sm font-bold bg-white
            rounded-full
            "
        onClick={() => dispatch(openLogInModal())}
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-full h-full px-0 sm:w-[600px] sm:h-fit sm:px-1 bg-white
        sm:rounded-xl
        "
        >
          <XMarkIcon
            className="w-7 mt-5 ml-5 cursor-pointer"
            onClick={() => dispatch(closeLogInModal())}
          />

          <div className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10 ">Create Your account</h1>
            <div className=" w-full space-y-5 mb-10  ">
              
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[54px] border border-gray-300 
                    outline-none pl-3 rounded-[4px] focus:border-[#f4af01]
                    transition 
                    "
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
              >
                <span className="text-white ">Log In</span>
              </button>
              <span className="mb-5 text-sm text-center block "> Or </span>
              <button
                className="w-full h-[48px] text-sm font-bold bg-[#f4af01]
                rounded-full
                "
              >
                <span className="text-white ">Log In as Guest</span>
              </button>
          

          </div>
        </div>
      </Modal>
    </>
  );
}
