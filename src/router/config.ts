/** 
 * @Author: zao
 * @Date: 2020-05-07 14:28:32
 * @LastEditors: zao
 * @LastEditTime: 2020-08-13 10:20:33
 * @Description:  路由配置文件
 */

import { lazy } from 'react';

import BasicLayout from '@/layouts/BasicLayout';
import CenterLayout from '@/layouts/CenterLayout';
import LoginLayout from '@/layouts/LoginLayout';
import MsgLayout from '@/layouts/MsgLayout';
import RecruitLayout from '@/layouts/RecruitLayout';
import DetailLayout from '@/layouts/DetailLayout';
import { Iroute } from '@/components/commons/RenderRoutes';

const config: Iroute[] =
  [
    {
      path: '/',
      component: BasicLayout,
      childRoutes: [
        {
          path: '/',
          exact: true,
          name: '首页',
          component: MsgLayout,
          childRoutes: [
            {
              path: '/',
              exact: true,
              component: lazy(() => import('@/pages/Home')),
            },
          ]
        },
        //会议详情的信息，只读页面，会议信息、出席嘉宾、志愿者招募
        {
          path: '/info/:meetingId',
          exact: true,
          component: MsgLayout,
          childRoutes: [
            {
              path: '/info/:meetingId',
              exact: true,
              name: '会议详情',
              component: lazy(() => import('@/pages/Home/Info')),
            }
          ]
        },
        {
          path: '/file/:meetingId',
          exact: true,
          component: MsgLayout,
          childRoutes: [
            {
              path: '/file/:meetingId',
              exact: true,
              name: '会议详情',
              component: lazy(() => import('@/components/commons/File')),
            }
          ]
        },
        //和我相关的会议详情，包括住宿安排和接机安排
        {
          path: '/related/info/:meetingId',
          exact: true,
          component: MsgLayout,
          childRoutes: [
            {
              path: '/related/info/:meetingId',
              exact: true,
              name: '会议详情',
              component: lazy(() => import('@/pages/Related/Info'))
            }
          ]
        },
        {
          path: '/publish',
          name: '会议发布',
          component: RecruitLayout,
          requireAuth: true,
          childRoutes: [
            {
              path: '/publish',
              exact: true,
              name: '会议发布',
              component: lazy(() => import('@/pages/Publish')),
            }
          ]
        },
        {
          path: '/awesome',
          name: '精彩幻灯',
          requireAuth: true,
          component: lazy(() => import('@/pages/Awesome'))
        },
        {
          path: '/related',
          name: '与我相关',
          requireAuth: true,
          component: lazy(()=> import('@/pages/Related'))
        },
        {
          path: '/source/:meetingId',
          name: '导入资源',
          requireAuth: true,
          component: lazy(() => import('@/pages/Related/Source'))
          
        },
        //查看嘉宾详情页面
        {
          path: '/detail',
          name: '详情',
          requireAuth: true,
          component: DetailLayout,
          childRoutes: [
            {
              path: '/detail',
              name: '默认详情页面',
              exact: true,
              redirect: '/related',
              requireAuth: true,
            },
            {
              path: '/detail/airdetail/:meetingId',
              name: '航班详情',
              requireAuth: true,
              component: lazy(()=> import('@/pages/Related/Detail/AirDtail'))
            },{
              path: '/detail/roomdetail/:meetingId',
              name: '房间详情',
              requireAuth: true,
              component: lazy(()=> import('@/pages/Related/Detail/RoomDetail'))
            }
          ]
        },
        {
          path: '/aircraft/:meetingId',
          name: '接机',
          requireAuth: true,
          component: lazy(() => import('@/pages/Related/Aircraft'))
        },
        {
          path: '/accommodation/:meetingId',
          name: '住宿',
          requireAuth: true,
          component: lazy(() => import('@/pages/Related/Accommodation'))
        },
        {
          path: '/login',
          name: '登录/注册',
          component: LoginLayout,
          childRoutes: [
            {
              path: '/login',
              exact: true,
              name: '短信登陆/注册',
              component: lazy(() => import('@/pages/Login/Msg'))
            },
            {
              path: '/login/pwd',
              name: '密码登陆',
              component: lazy(() => import('@/pages/Login/Pwd'))
            }
          ]
        },
        {
          path: '/signup',
          name: '注册',
          component: lazy(() => import('@/pages/Signup'))
        },
        {
          path: '/center',
          name: '个人中心',
          requireAuth: true,
          component: CenterLayout,
          childRoutes: [
            {
              path: '/center',
              exact: true,
              name: '个人资料',
              component: lazy(() => import('@/pages/Center/Info')),
            },
            {
              path: '/center/favorite',
              name: '我的收藏',
              component: lazy(() => import('@/pages/Center/Favorite')),
            },
            {
              path: '/center/message',
              name: '系统消息',
              component: lazy(() => import('@/pages/Center/Message')),
            },
          ],
        },
        {
          path: '/exception',
          name: '异常页',
          childRoutes: [
            {
              path: '/exception/403',
              name: '403',
              component: lazy(() => import('@/pages/Exception/403')),
            },
            {
              path: '/exception/404',
              name: '404',
              exact: true,
              component: lazy(() => import('@/pages/Exception/404')),
            },
            {
              path: '/exception/500',
              name: '500',
              component: lazy(() => import('@/pages/Exception/500')),
            },
          ],
        },
        { path: '*', exact: true, redirect: '/exception/404' },
      ],
    },
  ]


export default config;
