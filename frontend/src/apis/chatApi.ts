import { publicRequest } from '@hooks/requestMethods'
import {
  ChatRoomCheckResponseType,
  ChatRoomRequestDataType,
  FetchChatRoomResponseType,
  FetchChatRoomsRequestType,
} from '@/types/components/chatRoomType'

export const fetchChatRooms = async (params: FetchChatRoomsRequestType) => {
  return publicRequest
    .get(`/chatrooms`, { params })
    .then(res => res.data.chatRoomList)
}

export const checkChatRoomExistence = async (
  params: ChatRoomRequestDataType,
): Promise<ChatRoomCheckResponseType> => {
  try {
    const response = await publicRequest.get(`/chatrooms/check`, { params })
    return response
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { status: 404 }
    }
    throw error
  }
}

export const createChatRoom = async (
  chatRoomRequestBody: ChatRoomRequestDataType,
) => {
  return publicRequest
    .post(`/chatrooms`, chatRoomRequestBody)
    .then(res => res.data)
}

export const fetchChatRoomDetail = async (
  chatRoomNo: number,
): Promise<FetchChatRoomResponseType> => {
  try {
    const response = await publicRequest.get(`/chatrooms/detail/${chatRoomNo}`)
    const data = response.data
    console.log(data)
    return data
  } catch (error) {
    console.error('Error fetching chat room detail:', error)
    throw error
  }
}

export const fetchProvision = (chatRoomNo: number) => {
  return publicRequest
    .get(`/chatrooms/provision?chatRoomNo=${chatRoomNo}`)
    .then(res => res.data)
}
