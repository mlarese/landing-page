<template>
  <v-container>
    <v-layout
      column
      justify-center
      align-center
    >
      <v-layout
        class="title"
        style="color: #9E9D24"> {{ $vuetify.t('Good morning') }} {{ customer.reservation_name }} {{ customer.reservation_surname }}</v-layout>
    </v-layout>
    <v-layout
      class="pt-3"
      column
      justify-center
      align-center>
      <p> {{ customer.reservation_paragraph }} </p>
      <p> {{ customer.reservation_paragraph }} </p>
      <p> {{ customer.reservation_paragraph }} </p>
    </v-layout>
    <div class="text-md-left">
      <em><small>{{ $vuetify.t('The Staff of Hotel Ambassador') }} </small></em>
    </div>
  </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Welcome",
        computed: {
            ...mapGetters('reservation', ['customer'])
        }
    }
</script>

<style scoped>

</style>
