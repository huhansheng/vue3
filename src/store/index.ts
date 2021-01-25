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
      commit(SAVE_USER_INFO, data);
    }
  },
  modules: {}
});
