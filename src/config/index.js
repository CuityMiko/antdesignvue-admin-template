/* 项目通用全局配置 */

module.exports = {
  TOKEN_NAME: 'govtoken',
  openPermission: false,
  prodUseMock: false,
  prodShowSettingDrawer: false,
  storageOptions: {
    namespace: 'PRO__',
    name: 'ls', // 用 Vue.name.xx(get/set/remove/clear)
    storage: 'local', // session, local, memory
  },
};
