import request from '../../config/service'

export function register(data) {
  return request({
    url: '/api/register',
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/api/login',
    method: 'post',
    data,
  })
}