import { getUserInfoApi, getMaterialListApi } from '@/api/index'

export default {
  // 获取用户信息
  async getUserInfo ({ commit }, payload) {
    const data: any = await getUserInfoApi(payload)
    if (data.result === 0) {
      const res: object = data.result_rows
      commit('setUserInfo', res)
    }
  },

  async getMaterialList ({ commit }, payload) {
    const data: any = await getMaterialListApi(payload)
    if (data.result === 0) {
      const res: Array<object> = data.result_rows.list
      commit('setMaterialList', res)
    }
  }
}
