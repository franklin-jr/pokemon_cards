<template>
    <v-card
      class="mx-auto"
      max-width="220"
      dark
      style="border-radius: 20px"
    >
      <v-img
        class="card"
        max-width="220"
        :src="item.imageUrl"
        @click="$router.push(`pokemon/${item.id}`)"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <v-card-text>
        <div class="title">{{item.name}}</div>
        <div class="subtitle">{{item.id}}</div>

        <div v-if="item.types" class="mt-4 ml-2 mb-3">
          <v-row v-for="(type, i) in item.types" 
          :key="`type${i}`"
          >
            <div :class="['icon mr-2', type.toLowerCase()]">
              <img :src="require(`@/assets/images/icons/${type.toLowerCase()}.svg`)"/>
            </div>
          {{type}}
          </v-row>
        </div>
     
      </v-card-text>
     
    </v-card>
</template>
<script>
import '@/assets/scss/types_pokemon.scss';
export default {
  name: 'poke-card',
  props: {
    item: Object
  }
  
}
</script>

<style>
.card:hover{
  transform: scale(1.1);
  cursor: pointer;
}
</style>