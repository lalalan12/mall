import { createStore } from 'vuex'

export default createStore({
  state: {
    produces : []
  },
  mutations: {
    producesCount(state,produce) {
      produce.count++
    },
    producesAdd(state,produce) {
      state.produces.push(produce)
    }
  },
  actions: {
    addCart(context,payload) {
      let oldProduce = context.state.produces.find(item => item.iid === payload.iid)
      if (oldProduce) {
        context.commit('producesCount',oldProduce)
      } else {
        payload.count = 1
        payload.checked = false
        context.commit('producesAdd',payload)
      }
    }
  },
  modules: {
  }
})
