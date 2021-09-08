/**
 * 表单路由
 */
import { RouteLayout } from '@/layouts'

const formModle = {
  path: '/form',
  component: RouteLayout,
  redirect: '/form/list',
  hidden: true,
  children: [
    {
      path: 'list',
      name: 'FormList',
      component: () => import('@/views/form/list'),
      meta: { title: '表单列表', keepAlive: true },
    },
    {
      path: 'setting',
      name: 'FormSetting',
      component: () => import('@/views/form/setting'),
      meta: { title: '表单设置', keepAlive: true },
    },
    {
      path: 'detail',
      name: 'FormDetail',
      component: () => import('@/views/form/detail'),
      meta: { title: '表单详情', keepAlive: true },
    },
    {
      path: 'compare',
      name: 'FormCompare',
      component: () => import('@/views/form/compare'),
      meta: { title: '表单对比', keepAlive: true },
    },
  ],
}

export default formModle
