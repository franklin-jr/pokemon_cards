import Vue from 'vue'
import Vuex from 'vuex'

import { pokemonDao } from '@/service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon_list: []
  },
  mutations: {
    SET_POKEMON_LIST(state, payload) {
      state.pokemon_list = payload
    }
  },
  actions: {
    getPokemon({commit}) {
      return new Promise((resolve, reject) => {
        pokemonDao.getAll()
          .then(resp => {
            commit('SET_POKEMON_LIST', resp.data.cards)
            resolve()
          }).catch(erro => {
            reject(erro)
          })
      })
    },
    getPokemonByName({commit}, payload) {
      return new Promise((resolve, reject) => {
        pokemonDao.getByName(payload)
          .then(resp => {
            commit('SET_POKEMON_LIST', resp.data.cards)
            resolve()
          }).catch(erro => {
            reject(erro)
          })
      })
    },
    getPokemonById(_, payload) {
      return new Promise((resolve, reject) => {
        pokemonDao.getById(payload)
          .then(resp => {
            resolve(resp.data.card)
          }).catch(erro => {
            reject(erro)
          })
      })
    }
  },
  getters: {
    pokemon_list: state => state.pokemon_list
  }
})
