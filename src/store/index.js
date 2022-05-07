import { createStore } from 'vuex'

export default createStore({
  state: {
    formKey: '-1',
  },
  getters: {
  },
  mutations: {
    changeFormKey(state, key) {
      state.formKey = key
    }
  },
  actions: {
  },
  modules: {
  }
})
