import Vue  from "vue"
import Vuex from  "vuex"

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    user:{}
  },
  mutations:{
    // 当前用户信息
    GET_USER(state,data){
      state.user = data
    }
  },
  actions:{},
  getters:{},
})

export default store