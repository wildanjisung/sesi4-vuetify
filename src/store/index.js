import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    angka: 14
  },
  mutations: {
    setAngka(state, param) {
      state.angka = param
    }
  },
  actions: {
    changeAngkaValue(store, param) {
      if (param >= 10 ) {
        alert("tidak boleh lerbih dari 10")
      } else {
        store.commit("setAngka", param)
      }
    }
  },
})
