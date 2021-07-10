import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import mutations from './mutations'
import mutateType from './mutation-types'
import getters from './getters'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    state,
    mutations,
    getters
})