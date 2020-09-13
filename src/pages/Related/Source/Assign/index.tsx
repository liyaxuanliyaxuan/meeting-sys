/**
 * @ Author: zao
 * @ Create Time: 2020-08-20 18:49:22
 * @ Modified by: zao
 * @ Description: 分配房间或者住宿
 */

//房间的接口还没
import React, { ReactElement } from 'react'
import { useImmer } from 'use-immer'
import { useChange } from '@/hooks'
import { Idriver, getAllDrivers, assignDriver } from '@/services/apis/driver'
import { Iroom, getAllRooms, assignRoom } from '@/services/apis/room'
import { useRequest, useMount } from '@umijs/hooks'
import { Modal, Tabs } from 'antd'
import TabCard from '@/components/commons/TabCard'
import Button from '@/components/commons/Button'
import Input from '@/components/forms/Input'
import style from './style.module.scss'
interface Props {
  visible: any;
  meetingId: string;
  guestId: string;
}
const { TabPane } = Tabs;

function Assign({ meetingId, guestId, visible }: Props): ReactElement {
  const [driverList, setDriverList] = useImmer<Idriver[]>([])
  const [roomList, setRoomList] = useImmer<Iroom[]>([])
  const assignDriverR = useRequest(assignDriver, {
    manual: true,
    onSuccess: (res, param) => {
      visible.setFalse()
    }
  })
  const assignRoomR = useRequest(assignRoom, {
    manual: true,
    onSuccess: (res, param) => {
      visible.setFalse()
    }
  })
  const getAllDriversR = useRequest(getAllDrivers, {
    manual: true,
    onSuccess: (res, param) => {
      if (res.data.list) {
        setDriverList(draft => {
          return res.data.list
        })
      }
    }
  })
  const getAllRoomsR = useRequest(getAllRooms, {
    manual: true,
    onSuccess: (res, param) => {
      if (res.data.list) {
        setRoomList(draft => {
          return res.data.list
        })
      }
    }
  })
  const handleDriverAssign = (driverId: any) => {
    assignDriverR.run(meetingId, driverId, guestId)
  }
  const handleRoomAssign = (roomId: any) => {
    assignRoomR.run(meetingId, roomId, guestId)
  }
  useMount(() => {
    getAllDriversR.run(meetingId)
    //getAllRoomsR.run(meetingId)
  })


  const renderCards = [
    {
      tab: '接机',
      key: 'air',
      render:
        <article>
          <div className={style.inlieContainer}>
            {driverList.map((item, index) => {
              return (
                <div key={`assign--${index}`} className={style.wrapper}>
                  <div className={style.form}>
                    <Input value={item.carId} readOnly type='text' name='车牌号' />
                    <Input value={item.driverName} readOnly type='text' name='司机姓名' />
                    <Input value={item.driverTel} readOnly type='text' name='司机电话' />
                    <Input value={item.carType} readOnly type='text' name='车型' />
                  </div>
                  <div className={style.btn}>
                    <Button value='分配' onClick={() => handleDriverAssign(item.driverId)} />
                  </div>
                </div>)
            })}
          </div></article>
    },
    {
      tab: '住宿',
      key: 'room',
      render:
        <article>
          <div className={style.inlieContainer}>
            {roomList.map((item, index) => {
              return (
                <div key={`assign--${index}`} className={style.wrapper}>
                  <div className={style.form}>
                    <Input value={item.roomid} readOnly type='text' name='房间号' />
                    <Input value={item.roomType} readOnly type='text' name='房间类型' />
                    <Input value={item.roomPrice} readOnly type='text' name='房间价格' />
                  </div>
                  <div className={style.btn}>
                    <Button value='分配' onClick={() => handleRoomAssign(item.roomid)} />
                  </div>
                </div>)
            })}
          </div>
        </article>
    }
  ]
  return (
    <Modal
      title={'分配接机和住宿'}
      visible={visible.state}
      onOk={() => { }}
      onCancel={visible.setFalse}
      confirmLoading={assignDriverR.loading}
      bodyStyle={{paddingTop:'0'}}
    >
      <div className={style.modal}>
        <TabCard renderCardList={renderCards} />
      </div>
    </Modal>
  )
}

export default Assign

