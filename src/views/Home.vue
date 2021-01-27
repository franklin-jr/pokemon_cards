<template>
  <v-app>
   <header-app/>
   <v-main>
   <v-container class="maxContainer">
      <v-row>
        <v-col
          v-for="(item, i) in pokemonList"
          :key="i"
          class="d-flex child-flex"
          cols="12"
          md="3"
          sm="6"
        >
        <poke-card :item="item" />
        </v-col>
      </v-row>
     <!--  <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item,i) in pokemonList"
          :key="i"
        >
         <poke-card :item="item" />
        </v-carousel-item>
      </v-carousel> -->
   </v-container>
   </v-main>
  </v-app>
</template>

<script>

import PokeCard from '@/components/PokeCard'
import HeaderApp from '@/components/HeaderApp'


export default {
  name: 'Home',
  components: {
    PokeCard,
    HeaderApp
  },
  mounted() {
    this.$store.dispatch('getPokemon')
  },
  computed: {
    pokemonList() {
      return this.$store.getters.pokemon_list
    }
  }
}
</script>

<style scoped lang="scss">
.maxContainer {
  max-width: 1000px;
}
</style>
