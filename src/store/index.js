import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        profileInfo: {}
    },
    mutations: {
        setProfileInfo(state, payload) {
            state.profileInfo = payload
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }

})
export default store