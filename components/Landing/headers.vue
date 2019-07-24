<template>
  <v-container fluid>
    <v-layout class="align-baseline"><h2>{{ $vuetify.t('Hotel Ambassador C 2017') }}</h2> {{ address }} - {{ cap }} {{ city }} - {{ $vuetify.t('Tel') }}:<h2>{{ tel }}</h2>> - {{ $vuetify.t('Fax') }}: <h2>{{ fax }}</h2>> - {{ $vuetify.t('Email') }}: <h2>{{ email }}</h2>> </v-layout>
    <v-carousel
      hide-controls
    >
      <v-carousel-item
        v-for="(item,image) in items"
        :key="image"
        :src="item.src"
        hide-controls>

        <p class="text-lg-right">Right align on large viewport sizes</p>
        <p class="text-md-center">Center align on medium viewport sizes</p>
        <p class="text-sm-left">Left align on small viewport sizes</p>
        <p class="text-lg-center">Center align on all viewport sizes</p>
        <p class="text-xs-right">Right align on all viewport sizes</p>
        <v-layout
          align-center
          justify-center
        >
          <span class="subheading mr-2">256</span>
          <span class="subheading">45</span>
        </v-layout>
      </v-carousel-item>

    </v-carousel>
  </v-container>
</template>

<script>
    export default {
        name: "Carousel",
        data () {
            return {
                items: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
