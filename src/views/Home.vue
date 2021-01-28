<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="titlePokemon text-center">Pokémon</div>

        <v-img
          v-if="$vuetify.breakpoint.lg || $vuetify.breakpoint.md"
          class="mx-auto"
          :src="require('@/assets/images/banners/pokemon-fig.png')"
          max-width="300"
        ></v-img>

        <v-text-field
          v-model="search"
          @keyup="searchPokemon()"
          label="Buscar por nome"
          outlined
          rounded
        />
      </v-col>
    </v-row>

    <v-row v-if="loading" class="align-center">
      <v-progress-circular
        class="mx-auto"
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-row>

     <p class="text-center title primary--text" v-else-if="pokemonList.length === 0 && !loading">
      Não foi encontrado pokémon com o nome <strong> "{{search}}" </strong>
    </p>

    <v-row v-else-if="!$vuetify.breakpoint.xs && !loading">
      <v-col
        v-for="(item, i) in pokemonList"
        :key="i"
        class="d-flex child-flex"
        cols="12"
        md="3"
        sm="4"
      >
        <poke-card :item="item" />
      </v-col>
    </v-row>
    <v-carousel
      height="600"
      v-else-if="$vuetify.breakpoint.xs && !loading"
      hide-delimiters
    >
      <v-carousel-item v-for="(item, i) in pokemonList" :key="i">
        <poke-card :item="item" />
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import PokeCard from "@/components/PokeCard";
//import HeaderApp from '@/components/HeaderApp'

export default {
  name: "Home",
  components: {
    PokeCard,
    //HeaderApp
  },
  data() {
    return {
      next: false,
      search: "",
      loading: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    searchPokemon() {
      this.loading = true;
      clearTimeout(this.next);
      this.next = setTimeout(() => {
        if (this.search) this.$store.dispatch("getPokemonByName", this.search);
        else this.$store.dispatch("getPokemon");

        this.loading = false;
      }, 700);
    },
    init() {
      this.loading = true;
      this.$store
        .dispatch("getPokemon")
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    pokemonList() {
      return this.$store.getters.pokemon_list;
    },
  },
};
</script>
