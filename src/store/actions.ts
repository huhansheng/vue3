import { getUserInfoApi } from "../api/index";

interface Result {
  result: number;
}

export default {
  // 获取用户信息
  async getUserInfo({ commit }, payload) {
    const data: Result = await getUserInfoApi(payload);
    if (data.result === 0) {
      const res = data.result_rows;
      commit("setUserInfo", res);
    }
  }
};
