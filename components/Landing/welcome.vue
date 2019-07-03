<template>
  <v-container>
    <v-layout
      column
      justify-center
      align-center
    >
      <v-layout
        class="title"
        color="red"> {{ $vuetify.t('Good morning') }} {{ user }}</v-layout>
    </v-layout>
    <v-layout
      column
      justify-center
      align-center>
      <p> {{ paragraph }} </p>
    </v-layout>
    <div class="text-md-left">
      <em><small>{{ $vuetify.t('The Staff of Hotel Ambassador') }} </small></em>
    </div>
  </v-container>
</template>

<script>
    export default {
        name: "Welcome"
    }
</script>

<style scoped>

</style>
