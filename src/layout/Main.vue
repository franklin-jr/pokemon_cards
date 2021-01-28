<template>
  <v-app>
  <header-app/>
   <v-main class="grey lighten-3">
    <v-container
       fill-height
      :class="['overflow-y-auto align-center justify-center', {'maxContainer': $vuetify.breakpoint.lg || $vuetify.breakpoint.md}]"
    >

      <router-view/>

    </v-container>
  
   </v-main>
  </v-app>
</template>

<script>

import HeaderApp from '@/components/HeaderApp'


export default {
  name: 'Home',
  components: {
    HeaderApp
  },
  data () {
    return {
      next: false,
      search: ''
    }
  },
  mounted() {
    this.$store.dispatch('getPokemon')
  },
  methods: {
    searchPokemon() {
      clearTimeout(this.next)
      this.next = setTimeout(() => {
        if(this.search)
          this.$store.dispatch('getPokemonByName', this.search)
        else
          this.$store.dispatch('getPokemon')
      }, 700)
    }
  },
  computed: {
    pokemonList() {
      return this.$store.getters.pokemon_list
    }
  }
}
</script>

<style scoped lang="scss">

@font-face {
  font-family: Pokemon;
  src: url('../assets/fonts/pokemon/pokemon_solid.ttf')format('truetype');;
}


.maxContainer {
  max-width: 1000px;
}

.titlePokemon {
  font-size: 50px;
  font-family: Pokemon;
}
</style>
