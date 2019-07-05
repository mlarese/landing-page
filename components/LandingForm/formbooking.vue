<template>
  <v-container
    fluid
    grid-list-md
    class="elevation-0"
  >
    <v-card class="pa-4 elevation-0">
      <v-layout><h1> {{ $vuetify.t(' SUMMARY OF YOUR REQUEST' ) }}</h1> </v-layout>
      <v-layout >

        <v-flex
          sm3>
          <v-menu
            :close-on-content-click="true"
            v-model="datePickerFrom"
            :nudge-right="40"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            full-width
            min-width="250px"
          >
            <v-text-field
              slot="activator"
              :placeholder="$vuetify.t('From')"
              :label="$vuetify.t('Check-In')"
              v-model="checkin"
              box
              readonly
              append-icon="date_range"
            />
            <v-date-picker
              v-model="fltDateFrom"
              locale="ita" />
          </v-menu>
        </v-flex>
        <v-flex
          sm3>
          <v-menu
            :close-on-content-click="true"
            v-model="datePickerTo"
            :nudge-right="40"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            full-width
            min-width="250px"
          >
            <v-text-field
              slot="activator"
              :placeholder="$vuetify.t('To')"
              :label="$vuetify.t('Check-Out')"
              v-model="checkout"
              box
              readonly
              append-icon="date_range"
            />
            <v-date-picker
              v-model="fltDateTo"
              locale="ita" />
          </v-menu>
        </v-flex>
        <v-spacer/>
        <v-flex sm3>
          <v-text-field
            v-model="number"
            :label="$vuetify.t('For Each')"
            type="number"
            box
            hide-details/>
        </v-flex>
        <v-flex sm3>
          <v-text-field
            v-model="nights"
            :label="$vuetify.t('Number of Rooms')"
            :placeholder="$vuetify.t('Number of nights')"
            type="number"
            box
            hide-details/>
        </v-flex>
      </v-layout>
      <v-flex class="font-weight-bold subheading"> {{ $vuetify.t('CARRY OUT BY' ) }}</v-flex>
      <v-layout
        row>

        <v-flex
          sm3>
          {{ $vuetify.t('Tipology') }}:
          <strong>dsdfsds</strong>
        </v-flex>

        <v-flex
          sm3>
          {{ $vuetify.t('Tipology') }}:
          <strong>dsdfsds</strong>
        </v-flex>

        <v-flex
          sm3>
          {{ $vuetify.t('Tipology') }}:
          <strong>dsdfsds</strong>
        </v-flex>

        <v-flex
          sm3>
          {{ $vuetify.t('Tipology') }}:
          <strong>dsdfsds</strong>
        </v-flex>
      </v-layout>
      <v-layout
        row>

        <v-flex
          sm3>
          {{ $vuetify.t('Tipology') }}:
          <strong>dsdfsds</strong>
        </v-flex>

        <v-flex
          sm3>
          {{ $vuetify.t('Tipology') }}:
          <strong>dsdfsds</strong>
        </v-flex>

        <v-flex
          sm3>
          {{ $vuetify.t('Tipology') }}:
          <strong>dsdfsds</strong>
        </v-flex>
      </v-layout>
      <v-layout/>
      <v-layout
        row
        wrap>

        <v-flex
          xs12
          sm6>
          <strong class="font-weight-bold subheading">{{ $vuetify.t('Expire Date') }}</strong>
          <v-layout mx-2>
            <span class="error">23:4:4351</span>
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          sm6>
          <v-flex class="subheading">{{ $vuetify.t('Protocol') }}</v-flex>
          <v-layout mx-2>
            <span > das </span>
          </v-layout>

        </v-flex>

      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
    export default {
        name: "Form",
        data () {
            return {
                date: null,
                date2: null,
                form: false,
                datePickerTo: true,
                datePickerFrom: true,
                pagination: {}
            }
        }
    }
</script>

<style scoped>

</style>
