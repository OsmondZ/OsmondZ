import { axios } from '@/utils'
import type { LoginData, LoginRes } from '@/types/user'

export async function userLoginApi(obj: LoginData): Promise<LoginRes> {
  return axios.post('/user/login', obj)
}

export async function userInfoApi(): Promise<LoginRes> {
  return axios.get('/user/info')
}
