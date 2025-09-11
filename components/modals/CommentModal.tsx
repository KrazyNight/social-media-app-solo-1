"use client"
import { closeCommentModal } from '@/redux/slices/modalSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CommentModal() {

  const isOpen = useSelector((state: RootState) => state.modals.commentModalOpen)
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
    
    <Modal
    open={isOpen}
    onClose={() => dispatch(closeCommentModal())}
    className='w-[600px] h-[600px] bg-white' 
    >
        <div>Comment Modla</div>

    </Modal>
      
    </>
  )
}
