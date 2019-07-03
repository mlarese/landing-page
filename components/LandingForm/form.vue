<template>
  <v-container fluid>
    <v-card class="pa-4">
      <v-layout class="pt-3">

        <v-flex
          sm6
          class="pt-2">
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
              v-model="$record.checkin"
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
          sm6
          class="pt-2">
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
              v-model="$record.checkout"
              box
              readonly
              append-icon="date_range"
            />
            <v-date-picker
              v-model="fltDateTo"
              locale="ita" />
          </v-menu>
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
