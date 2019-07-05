<template>
  <v-container fluid>
    <v-layout class="display-3">
      <span style="color: orange"> {{ $vuetify.t(' FIRST DEAL' ) }}</span>
    </v-layout>
    <v-layout class="subheading">
      <span> {{ $vuetify.t(' ROOM 1' ) }}
    </span></v-layout>
    <v-card class="elevation-0">
      <v-layout>
        <v-flex
          xs4
          sm4>
          <v-img
            style="height: 300px"
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"

          />
        </v-flex>
        <v-flex
          xs8
          sm8
          class="pt-3 pl-3"
        >
          <v-layout>
            <h1>{{ $vuetify.t(' JUNIOR FAMILY SUIT' ) }}</h1>
            <v-spacer/>
            icon
          </v-layout>
          <v-layout>
            icon
          </v-layout>
          <v-layout>
            <p>paragraphs</p>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
    <div class="pt-4">
      <v-tabs
        v-model="active"
        card
      >
        <v-tab
        >
          Item 1

        </v-tab>
        <v-tab
        >
          Item 1

        </v-tab>
        <v-tab
        >
          Item 1

        </v-tab>
        <v-tab-item
        >
          <v-card flat>
            <v-card-text>God is goods</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
    <v-layout class="display-1 pt-4">
      <span>{{ $vuetify.t(' TOTAL STAY' ) }}    ${{ amount }}</span>
    </v-layout>
    <v-layout class="subheading pt-4">
      <span>{{ $vuetify.t(' confirmatory deposit ' ) }}  ${{ amount }}</span>
      <v-spacer/>
      <v-btn
        color="warning"
        dark>{{ $vuetify.t('book the proposal' ) }}</v-btn>

    </v-layout>
    <v-divider/>
  </v-container>
</template>

<script>
    export default {
        name: "Roomselect",
        data() {
            return {
                active: null
            }
        }
    }
</script>

<style scoped>

</style>
