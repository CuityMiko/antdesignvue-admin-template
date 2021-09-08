// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteLayout, BlankLayout } from '@/layouts'
import { openPermission } from '@/config/index';
import formModle from '@/router/modules/form';

// 默认加载和登陆成功跳转路由
export const defaultRootRoutePath = '/dashboard';

// 不跳转白名单路由名
export const whiteList = ['login', 'register', 'registerResult', 'FormList', 'FormSetting', 'FormDetail', 'FormCompare'];

// 前端未找到页面路由
export const notFoundRouter = {
  path: '*',
  redirect: '/404',
  hidden: true,
};

// 基础路由 固定不变的路由
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/index'),
      },
    ],
  },
  formModle,
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
  },
];

// 同步路由 一般为前端写死的路由不通过接口获取
let syncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: `${defaultRootRoutePath}/analysis`,
    children: [
      // 默认页
      {
        path: defaultRootRoutePath,
        name: 'dashboard',
        redirect: `${defaultRootRoutePath}/analysis`,
        component: RouteLayout,
        meta: { title: '工作台', keepAlive: true, icon: 'dashboard', permission: ['dashboard'] },
        children: [
          {
            path: `${defaultRootRoutePath}/analysis`,
            name: 'analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: 'hello', keepAlive: true, permission: ['dashboard'] },
          },
        ],
      },
    ],
  },
];

if (!openPermission) {
  syncRouterMap.push(notFoundRouter);
}

export { syncRouterMap };
