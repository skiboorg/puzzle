import { LocalStorage } from 'quasar'
import { api } from 'boot/axios'
import { Notify } from 'quasar'
import { Screen } from 'quasar'
import { Cookies } from 'quasar'



const state = () => ({
  user:{},
  loggedIn:false

})

const mutations = {
  updateUser(state,data){
    state.user = data
  },
  updateUserStatus(state,data){
    state.loggedIn = data
  }
}

const actions = {
  loginUser({dispatch,ssrContext},data){
    console.log(this._vm.$cook)
    api.post('/auth/token/login/',data)
      .then(response=>{
        this._vm.$cook.set('auth_token',response.data.auth_token)
        api.defaults.headers.common['Authorization'] = 'Token ' + response.data.auth_token
        dispatch('getUser')
        this.$router.push('/game')
      })
      .catch(function (error) {
        console.log('login error')
      })

  },
  async getUser ({commit,dispatch}){
    const response = await api.get( '/api/user/me')
    console.log('getUser', response)
    commit('updateUser', response.data)
    commit('updateUserStatus', true)

  },
  logoutUser({commit}){
    api.post( '/auth/token/logout/')
      .then(response=>{
        console.log('logoutUser', response)
        api.defaults.headers.common['Authorization'] = null
        this._vm.$cook.remove('auth_token')
        commit('updateUser', {})
        commit('updateUserStatus', false)
        this.$router.push('/auth')
      })
      .catch(function (error) {
        console.log('logoutUser error')
      })
  }
}

export const getters = {
  isLoggedIn: (state) => state.loggedIn,
  user: (state) => state.user,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
