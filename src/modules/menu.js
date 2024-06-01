const state = {
   menuOpener: false
}

const mutations = {
   menuOpenerMutations(state){
      state.menuOpener = true
   },
   menuClose(state) {
      state.menuOpener = false
   }
}

const actions = {
   menuOpenerActions(context) {
      context.commit('menuOpenerMutations')
   }
}

export default {
   state , mutations , actions
}