import { axios } from '@/utils/request'

const api = {
  getInfo: '/getinfo',
}

export function getInfo(token) {
  return axios({
    url: api.getInfo,
    method: 'post',
    data: token,
  })
}
