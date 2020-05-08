// TODO: remember to set request
// TODO: remember to set UploadInput loadStatus

import React, {
  FormEvent,
  ReactElement,
  useState
} from 'react';

import { Spin, message } from 'antd';
import { useParams } from 'react-router-dom';
import { useImmer } from 'use-immer';
import infoDetail from '@/assets/images/info_detail.png'

import Button from '@/components/commons/Button';
import Input from '@/components/forms/Input/Input';
import Textarea from '@/components/forms/Textarea';
import UploadInput from '@/components/forms/UploadInput'
import {
  applyItem,
  favoriteItem,
  getItemInfo,
  Iitem,
  quitFavorite,
  quitItem,
} from '@/services/apis/item';
import { uploadFiles, downloadFile, deleteMyFile } from '@/services/apis/files'
import {
  StarFilled,
  StarOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import {
  useRequest,
  useUnmount,
} from '@umijs/hooks';
import { download } from '@/utils'
import { meetingTypes } from '@/constant'
import style from './Info.module.scss';

interface Props {
  type: number;
}
interface Iinfo extends Iitem {
  isFavorited: boolean;
  isApplied: boolean;
  files: {
    fileid: number;
    meetingid: number;
    path: string;
    name: string;
  }[]
}
function Info({ type }: Props): ReactElement {
  const { meetingId } = useParams()
  const _meetingId = Number(meetingId)
  const [roleType, setRoleType] = useState(0)
  const [fileStatus, setFileStatus] = useState(false)
  const [info, setInfo] = useImmer<Iinfo>({
    mName: '',
    startTime: '',
    introduction: '',
    organizer: '',
    communicate: '',
    schedule: '',
    isFavorited: false,
    isApplied: false,
    files: []
  })
  enum relationType {
    created = 1,// 创建的会议
    applied = 2,// 参加的会议
    favorited = 3,// 收藏的会议
  }
  enum btnStatus {
    applied = 'rgba(255,190,14,1)',// 已参加会议
    unApplied = 'rgba(255,190,14,1)',// 未参加会议
    appliedValue = '取消报名',
    unAppliedValue = '我要报名'
  }
  const meetingInfoR = useRequest((meetingId = _meetingId) => getItemInfo(meetingId), {
    onSuccess: (result, params) => {
      if (result.data) {
        const { relations, meeting, files } = result.data
        if (relations.includes(relationType.created)) {
          setRoleType(relationType.created)
        } else {
          setRoleType(0)
        }
        setInfo(draft => {
          draft.isFavorited = relations.includes(relationType.favorited)
          draft.isApplied = relations.includes(relationType.applied)
          draft.mName = meeting.mName
          draft.location = meeting.location
          draft.startTime = meeting.startTime
          draft.introduction = meeting.introduction
          draft.organizer = meeting.organizer
          draft.communicate = meeting.communicate
          draft.schedule = meeting.schedule
          draft.typeid = meeting.typeid
          draft.needvolunteer = meeting.needvolunteer
          draft.files = files.map((item: any) => {
            return {
              uid: item.fileid,
              name: item.name,
              meetingId: item.meetingid,
            }
          })
        })
      }
    }
  })

  const applyItemR = useRequest((meetingId = _meetingId) => applyItem(meetingId), {
    manual: true,
    onSuccess: (result, param) => {
      if (result && result.code >= 0) {
        setInfo(draft => { draft.isApplied = true })
      } else {
        setInfo(draft => { draft.isApplied = false })
      }
    }
  })
  const quitItemR = useRequest((meetingId = _meetingId) => quitItem(meetingId), {
    manual: true,
    onSuccess: (result, param) => {
      if (result && result.code >= 0) {
        setInfo(draft => { draft.isApplied = false })
      } else {
        setInfo(draft => { draft.isApplied = true })
      }
    }
  })
  const favoriteR = useRequest((meetingId = _meetingId) => favoriteItem(meetingId), {
    manual: true,
    onSuccess: (result, param) => {
      if (result && result.code >= 0) {
        setInfo(draft => { draft.isFavorited = true })
      } else {
        setInfo(draft => { draft.isFavorited = false })
      }
    }
  })
  const quitFavoriteR = useRequest((meetingId = _meetingId) => quitFavorite(meetingId), {
    manual: true,
    onSuccess: (result, param) => {
      if (result && result.code >= 0) {
        setInfo(draft => { draft.isFavorited = false })
      } else {
        setInfo(draft => { draft.isFavorited = true })
      }
    }
  })
  const downloadFileR = useRequest((meetingId, fileName) => downloadFile(meetingId, fileName), {
    manual: true,
    onSuccess: (result, params) => {
      if (result.code < 0) {
        message.error(result.message)
      } else {
        download(result, params[1])
      }
    }
  })


  const uploadFileR = useRequest((formData) => uploadFiles(formData), {
    manual: true,
    onSuccess: (result, params) => {
      console.log(result)

      if (result.code >= 0) {
        setFileStatus(true)
        message.success('上传成功')
      } else {
        setFileStatus(false)
      }
    }
  })
  const deleteMyFileR = useRequest((meetingId, fileId) => deleteMyFile(meetingId, fileId), {
    manual: true,
    onSuccess: (result, params) => {
      if (result.data) {
        setFileStatus(true)
        message.success('删除成功')
      } else {
        setFileStatus(false)
      }
    },
    onError: (error) => {
      setFileStatus(false)
    }
  })

  // 报名
  const handleApply = async (e: FormEvent) => {
    e.preventDefault()
    if (info.isApplied) {
      quitItemR.run()
    } else {
      applyItemR.run()
    }
  }

  // 收藏
  const handleFavorite = async () => {
    if (info.isFavorited) {
      quitFavoriteR.run()
    } else {
      favoriteR.run()
    }
  }


  return (
    <Spin spinning={meetingInfoR.loading}>
      <form className={style.container} onSubmit={handleApply}>
        <div className={style.header}>
          <h2 className={style.title}>{info.mName}</h2>
          <div className={style.headerInfo}>
            <img src={infoDetail} alt="img" className={style.icon} />
            <div className={style.basicInfo}>
              <div className={style.timeAndAddr}>
                <Input type='text' name={'开始时间'} readOnly value={info.startTime} />
                <Input type='text' name={'结束时间'} readOnly value={info.startTime} />
                <Input type='text' name={'会议地点'} readOnly value={info.location} />
              </div>
              <div className={style.btnGroup}>
                <div className={style.favorite}>
                  {info.isFavorited ?
                    quitFavoriteR.loading
                      ? <LoadingOutlined className={style.star}/>
                      : <StarFilled className={style.starFiled} onClick={handleFavorite} />
                    : favoriteR.loading
                      ? <LoadingOutlined className={style.star}/>
                      : <StarOutlined className={style.star} onClick={handleFavorite} />}
                </div>
                <Button type='submit' className={style.btn} value={info.isApplied ? btnStatus.appliedValue : btnStatus.unAppliedValue} fontSize={10} loading={info.isApplied ? quitItemR.loading : applyItemR.loading} size='small' />
              </div>
            </div>
          </div>


        </div>
        <div className={style.meetingInfo}>
          <h2>会议信息</h2>
          <div>
            <Textarea name={'会议简介'} readOnly value={info.introduction} />
            <Input type='text' name={'主办方'} readOnly value={info.organizer} />
            <Input type='text' name='联系方式' readOnly value={info.communicate} />
          </div>
        </div>
        <div className={style.meetingGuest}>
          <h2>出席嘉宾</h2>
          <div></div>
        </div>
        <div className={style.meetingVolunteer}>
          <h2>志愿者招募</h2>
          <div>
            <Input type='text' name='招募人数' readOnly value={info.needvolunteer} />
            <Textarea name='招募需求' readOnly value={info.schedule} />
          </div>
        </div>
      </form>
    </Spin>
  )
}

export default Info


