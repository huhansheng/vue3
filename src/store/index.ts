import { createStore } from "vuex";
import { getUserInfoApi } from "../api/index.js";
const SAVE_USER_INFO = "SAVE_USER_INFO";

export default createStore({
  state: {
    user: {
      id: "",
      name: "",
      account: ""
    }
  },
  mutations: {
    [SAVE_USER_INFO](state, action) {
      state.user = action || {};
    }
  },
  actions: {
    async getUserInfo({ commit }, payload) {
      const data = await getUserInfoApi(payload);
      if(data.result === 0) {
        const res = data.result_rows;
        commit(SAVE_USER_INFO, res);
      }
    }
  },
  modules: {}
});
