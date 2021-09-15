import apiUrl from '../apiConfig'
import axios from 'axios'

export const createInquiry = (data, user) => {
  return axios({
    url: apiUrl + '/inquiries',
    method: 'post',
    data: { inquiry: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showInquiries = () => {
  return axios({
    url: apiUrl + '/inquiries',
    method: 'get'
  })
}

export const updateInquiry = (data, id, user) => {
  return axios({
    url: apiUrl + '/inquiries/' + id,
    method: 'patch',
    data: { inquiry: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteInquiry = (id, user) => {
  return axios({
    url: apiUrl + '/inquiries/' + id,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
