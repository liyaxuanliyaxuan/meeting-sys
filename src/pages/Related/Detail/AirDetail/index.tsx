/**
 * @ Description: 查看航班详情
 **/

import React, { ReactElement } from 'react'
import { useBoolean, useRequest, useMount } from '@umijs/hooks'
import {useHistory ,useParams} from 'react-router-dom'
import { useImmer } from 'use-immer'
//获取分配的详情没有数据
import { driverAssignInfo } from '@/services/apis/driver'
import { Iguest, getGuestInfo} from '@/services/apis/guest'
import  DetailCard  from '../Card'
import style from './style.module.scss'

interface Props {
    meetingId: string;
}

function AirDetail(): ReactElement {

 const { meetingId } = useParams()
 const history = useHistory()
 const [guestList, setGuestList] = useImmer<Iguest[]>([])
 const [guestAndDriverMap, setGuestAndDriverMap] = useImmer<Iguest[]>([])
 const getAllGuestR = useRequest(getGuestInfo, {
     manual: true,
     onSuccess: (res, param) => {
         if(res.data.info){
             setGuestList(draft => {
                 return res.data.data
             })
         }
     }
 })
 const getGuestAndDriverMapR = useRequest(driverAssignInfo, {
     manual: true,
     onSuccess: (res, params) => {
         if(res.data.info){
             setGuestAndDriverMap(draft => {
                 return res.data.res
             })
         }
     }
 })

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
const driverInfo = {
    driverId: '123',
    carId: '123',
    driverName: 'lyx',
    driverTel: '123456',
    carType: '123456'
}
useMount(() => {
    getAllGuestR.run(meetingId as string)
    getGuestAndDriverMapR.run(meetingId as string)
})
 return (
     
    <div className={style.container}>
        <p className={style.title}>分配详情</p>
        {/*获取详情列表，使用map渲染*/}
        <DetailCard meetingId={meetingId as string} guest={guestInfo} driver={driverInfo} />
    </div>
  )
}

export default AirDetail