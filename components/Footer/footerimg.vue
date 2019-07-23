<template>
  <!--eslint-disable-->
  <v-container fluid style="background-color: #ECEFF1">
      <v-layout align-end justify-end class="title" style="color: #9E9D24">{{ $vuetify.t(' THE MOTIVES' ) }}</v-layout>
      <v-layout align-end justify-end style="color: #9E9D24">{{ $vuetify.t(' to choose our hotel' ) }}</v-layout>
      <br>
      <v-layout>
        <v-flex sm3 xs3>
            <v-img src="https://picsum.photos/510/303?random" height="220px">
                <v-card-title class="white--text  pt-5 justify-center">
                    <div class="title pt-5 justify-center">{{ $vuetify.t('ROOFTOP LIFESTYLE' ) }}</div>
                </v-card-title>
            </v-img>
        </v-flex>
          <v-flex sm3 xs3>
              <v-img src="https://picsum.photos/510/302?random" height="220px">
                  <v-card-title class="white--text  pt-5 justify-center">
                      <div class="title pt-5 justify-center">{{ $vuetify.t('BEACH' ) }}</div>
                  </v-card-title>
              </v-img>
          </v-flex>
          <v-flex sm3 xs3>
              <v-img src="https://picsum.photos/510/301?random" height="220px">
                  <v-card-title class="white--text  pt-5 justify-center">
                      <div class="title pt-5 justify-center">{{ $vuetify.t('GOURMET' ) }}</div>
                  </v-card-title>
              </v-img>
          </v-flex>
          <v-flex sm3 xs3>
              <v-img src="https://picsum.photos/510/300?random" height="220px">
                  <v-card-title class="white--text  pt-5 justify-center" >
                      <div class="title pt-5 justify-center">{{ $vuetify.t('HOTEL BIKE CLUB' ) }}</div>
                  </v-card-title>
              </v-img>
          </v-flex>
      </v-layout>
      <br>
      <br>
      <v-layout style="color: #9E9D24" >{{ $vuetify.t(' For more information visit' ) }}</v-layout>
      <v-layout style="color: #9E9D24" class="headline">{{ $vuetify.t(' www.hotelambassadorbibione.it' ) }}</v-layout>

  </v-container>
</template>

<script>
    export default {
        name: "Footerimg"
    }
</script>

<style scoped>

</style>
