/**
 * @ Description: 查看房间详情页面
 **/

//allRoom没有数据,没有房间详情接口
import React, { ReactElement, useEffect } from 'react'
import { useState } from 'react'
import { useBoolean, useRequest, useMount } from '@umijs/hooks'
import { useImmer } from 'use-immer'
import { getAllRooms } from '@/services/apis/room'
import DetailCard from '../Card'
import {useHistory ,useParams} from 'react-router-dom'
import style from './style.module.scss'

interface Props {
    meetingId: string;
}

function RoomDetail({}: Props): ReactElement {
 const {meetingId}=useParams()
 const history = useHistory()
 const [roomsList, setRoomList] = useState()
 const getAllRoomsR = useRequest(getAllRooms, {
     manual: true,
     onSuccess: (res, params) => {
         if(res.data.info){
             setRoomList(res.data.data)
         }
     }
 })
 //mock数据
 const guestInfo = {
    guestid: '123',
    meetingid:'123',
    avatarUrl: 'c5f822d4-9fd5-4a24-a7c8-42ed4bad74c5.jpg',
    introduction: '123',
    name: '123',
    position: '123',
    flightInfo: '123',
    personId: '123',
    guestTel: '123'
 }
 const roomInfo = {
     roomType: 'max',
     roomid: '123',
     roomPrice: '123'
 }
 useMount(()=>{
     getAllRoomsR.run(meetingId as string)
 })
 useEffect(()=>{
     console.log(roomsList);
 })
 return (
    <div className={style.container}>
        <p className={style.title}>分配详情</p>
        {/*使用map渲染房间分配详情页面列表*/}
        <DetailCard meetingId={meetingId as string} guest={guestInfo} room={roomInfo}/>
    </div>
  )
}
 
export default RoomDetail