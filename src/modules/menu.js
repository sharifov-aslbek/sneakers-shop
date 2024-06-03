const state = {
   menuOpener: false,
   price: null,
   likeArray: null,
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
   },
   likeArrtoState(state , payload) {
      state.likeArray = payload
   }
}

const actions = {
   menuOpenerActions(context) {
      context.commit('menuOpenerMutations')
   },
   getTotalProduct(context , price){
      context.commit("priceTostate" , price)
   },
   getLikesProducts(context , array){
      context.commit("likeArrtoState", array )
   }
}

export default {
   state , mutations , actions
}