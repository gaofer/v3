import { createStore } from 'vuex'

export default createStore({
  state: {
    formKey: '-1',
    formKeylist:[],
    formName: '',
    formListInfo: [],
  },
  getters: {
  },
  mutations: {
    changeFormKey(state, key) {
      state.formKey = key;
      state.formKeylist = [key];
    },
    changeFormName(state, name) {
      state.formName = name
    },
    changeFormListInfo(state, list) {
      state.formListInfo = list
    }
  },
  actions: {
  },
  modules: {
  }
})
