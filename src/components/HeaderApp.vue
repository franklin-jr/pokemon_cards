<template>
   <v-app-bar
      color="transparent"
      elevation="0"
      dense
      app
    >
     
      <v-btn  @click="$router.push('/')" icon>
        <v-icon color="primary" >mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

     
    </v-app-bar>
</template>

<script>
export default {
  name: 'header-app'
}
</script>>