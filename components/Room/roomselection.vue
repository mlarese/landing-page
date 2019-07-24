<template>
  <!--eslint-disable-->
  <v-container>
    <v-layout class="display-3">
      <span style="color: #9E9D24"> {{ $vuetify.t('FIRST DEAL' ) }}</span>
    </v-layout>
    <v-layout class="subheading">
      <span> {{ $vuetify.t(' ROOM 1' ) }}
    </span></v-layout>
    <v-card
      class="elevation-0"
      style="background-color: #ECEFF1"
    >
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
            <v-flex
              xs5
              sm5><h1>{{ $vuetify.t(' JUNIOR FAMILY SUIT' ) }}</h1></v-flex>
            <v-flex
              xs3
              sm3/>
            <!--<v-spacer/>-->
            <v-flex
              xs3
              sm3
              class=" ml-5">
              <v-card class="elevation-0">
                <v-layout>
                  <v-flex
                    xs3
                    sm3>
                    <span style="justify-content: center"><v-icon
                      large
                      style="color: #47494e;">local_cafe</v-icon></span>
                  </v-flex>
                  <v-flex
                    xs8
                    sm8>
                    <v-layout>{{ $vuetify.t('Treatment' ) }}</v-layout>
                    <v-layout><h4>{{ $vuetify.t('Half board' ) }}</h4></v-layout>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-layout class="bold">
              <span class="pr-2">{{ $vuetify.t('MAX' ) }}</span>
              <v-icon>person_outline</v-icon>
              <v-icon>person_outline</v-icon>
              <v-icon>person_outline</v-icon>
              <v-icon>person_outline</v-icon>
            </v-layout>
          </v-layout>
          <v-layout>
            <p>{{ customer.reservation_paragraph }}</p>
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
      <strong>{{ $vuetify.t(' TOTAL STAY' ) }}    € {{ booking.reservation_tot_reservation_price }} <sup> '00</sup></strong>
    </v-layout>
    <v-layout class="subheading pt-4">
      <strong>{{ $vuetify.t(' confirmatory deposit ' ) }}  € {{ booking.reservation_tot_account }} <sup> ,00</sup></strong>
      <v-layout align-end justify-end>
          <v-btn color="#9E9D24" dark> {{ $vuetify.t('book the proposal' ) }} 2</v-btn>

      </v-layout>

    </v-layout>
    <v-divider
      class="pt-5"
      insert
      height="200px"
    />
  </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Roomselect",
        data() {
            return {
                active: null
            }
        },
        computed: {
            ...mapGetters('reservation', ['booking','customer', 'room'])
        }
    }
</script>

<style scoped>

</style>
