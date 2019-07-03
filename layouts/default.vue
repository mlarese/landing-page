<template>
  <v-app dark>
    <notifications
      position="top right"
      style="margin-top:50px"/>

    <v-toolbar
      tabs
      class="elevation-1 app-toolbar ma-0"
      style="color: white;
        font-size: 22px;">

      <a
        style="color: white;
        font-size: 22px;"
        href="/prebooking"><b>M</b><b>M</b>one</a>

      <v-spacer/>

      <span class="mr-2 ml-5">{{ $vuetify.t('user') }}</span>

      <v-btn
        flat
        class="py-2 pl-2 pr-0">
        <span
          class="mr-2">
          {{ $vuetify.t('Logout') }}
        </span>
        <v-icon
          class="ml-1"
          small>exit_to_app</v-icon>
      </v-btn>

    </v-toolbar>

    <v-content >
      <v-container
        fluid
        class="px-1">
        <nuxt />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
   // import {mapGetters, mapState, mapActions} from 'vuex'
    export default {
        data () {
            return {
                tab: null
            }
        }
    }
</script>
<style>
</style>
