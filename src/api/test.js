import request from '../config/service';

export function getFiles() {
  return request({
    url: '/getList/file',
    method: 'get',
  });
}

export function uploadFile(data) {
  return request({
    url: '/upload/file',
    data,
    method: 'post',
  });
}