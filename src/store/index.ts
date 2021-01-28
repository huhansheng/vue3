import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import modules from './modules/index'

console.log(state, mutations, actions, modules)

export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: modules
})
