const state = {
   menuOpener: false,
   price: null
}

const mutations = {
   menuOpenerMutations(state){
      state.menuOpener = true
   },
   menuClose(state) {
      state.menuOpener = false
   },
   priceTostate(state, payload){
      state.price = payload
   }
}

const actions = {
   menuOpenerActions(context) {
      context.commit('menuOpenerMutations')
   },
   getTotalProduct(context , price){
      context.commit("priceTostate" , price)
   }
}

export default {
   state , mutations , actions
}