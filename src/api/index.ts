import http from '@/http/axios'

export function getUserInfoApi (params?: object): any {
  const url: string = 'user.json'
  return http.get(url, params)
}

export function submitUserInfoApi (params?: object): any {
  const url: string = 'user/update_user_info.json'
  return http.get(url, params)
}

export function getMaterialListApi (params: object): any {
  const url = 'get_material_list.json'
  return http.get(url, params)
}

