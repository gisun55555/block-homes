import React from 'react'

export type MessageType = {
  chatNo: number
  createdAt: string
  isRead: boolean
  message: string
  type: string | null
  userImage: string | null
  userName: string
  userWalletAddress: string
}

export interface SendMessageInputPropsType {
  sendButtonClick: () => void
  message: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
