<template>
  <!--eslint-disable-->
  <v-container
    fluid
    class="align-center">
    <v-layout justify-center align-center><h2> {{ $vuetify.t('Hotel Ambassador C 2017') }}</h2> {{ address }} - {{ cap }} {{ city }} - {{ $vuetify.t('Tel') }}:<h2>{{ tel }}</h2>> - {{ $vuetify.t('Fax') }}: <h2>{{ fax }}</h2>> - {{ $vuetify.t('Email') }}: <h2>{{ email }}</h2>> </v-layout>
    <v-layout justify-center align-center>
    <a style="font-size: 15px;" href="/">Privacy</a><v-divider class="mx-3" inset vertical/>
    <a style="font-size: 15px;" href="/">Credits</a></v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "Footname"
    }
</script>

<style scoped>

</style>
