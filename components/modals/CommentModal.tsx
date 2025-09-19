"use client"
import { closeCommentModal } from '@/redux/slices/modalSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostHeader } from '../Post'
import PostInput from '../PostInput'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function CommentModal() {

  const isOpen = useSelector((state: RootState) => state.modals.commentModalOpen)
  const dispatch: AppDispatch = useDispatch();
  const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails)

  return (
    <>
    
    <Modal
    open={isOpen}
    onClose={() => dispatch(closeCommentModal())}
    className='flex justify-center items-center sm:rounded-full' 
    >
        <div className='w-full h-full sm:w-[600px] sm:h-fit bg-white
        sm:rounded-xl outline-none 
        ' >
           <XMarkIcon
            className="w-7 mt-5 ml-5 cursor-pointer"
            onClick={() => dispatch(closeCommentModal())}
          />



          <PostHeader
            name={commentDetails.name}
            username={commentDetails.username}
            text={commentDetails.text}
            ReplyTo={commentDetails.username}
          />

          <div className="mt-4   ">
            <PostInput insideModal={true} />
          </div>
          




        </div>

    </Modal>
      
    </>
  )
}
