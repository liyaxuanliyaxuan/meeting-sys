/**
 * @ Description: 关于房间的相关接口
 */

import * as config from './config'
import { get, post,deleteFile } from '../axios'

export interface Iroom{
  roomid?: string,
  roomType?: string,
  roomPrice?: string
}
export const getAllRooms = (meetingId: string) => post(config.SHOW_ALL_ROOMS, {
  data: {
    meetingId
  }
})

export const assignRoom = (meetingId: string, driverId: string, guestId: string) => post(config.ASSIGN_ROOM, {
  data: {
   meetingId
  },msg:'分配成功'
})
export const assignableRooms = (meetingId: string) => post(config.ASSIGNABLE_ROOMS, {
  data: {
    meetingId
  }
})
export const assignedRooms = (meetingId: string) => post(config.ASSIGNED_ROOMS, {
  data: {
    meetingId
  }
})
export const removeRoom = (meetingId: string) => post(config.REMOVE_ROOM, {
  data: {
    meetingId
  },msg:'删除成功'
})
export const showStaticRoom = (meetingId: string) => post(config.SHOW_STATISC_ROOM, {
  data: {
    meetingId
  }
})