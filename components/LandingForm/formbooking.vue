<template>
  <v-container
    grid-list-md
    class="elevation-0"
  >
    <v-card
      class="pa-4 elevation-0"
      style="background-color: #ECEFF1">
      <v-layout style="color: #9E9D24"><h1> {{ $vuetify.t(' SUMMARY OF YOUR REQUEST' ) }}</h1> </v-layout>
      <v-layout class="elevation-0">
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
              v-model="customer.reservation_checkin_date"
              light
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
              v-model="customer.reservation_checkout_date"
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
            v-model="customer.reservation_numpersons"
            :label="$vuetify.t('For Each')"
            type="number"
            box
            hide-details/>
        </v-flex>
        <v-flex sm3>
          <v-text-field
            v-model="customer.reservation_numnights"
            :label="$vuetify.t('Number of Rooms')"
            :placeholder="$vuetify.t('Number of nights')"
            type="number"
            box
            hide-details/>
        </v-flex>
      </v-layout>
      <v-flex class="subheading"> {{ $vuetify.t('CARRY OUT BY' ) }}</v-flex>
      <v-layout
        row>

        <v-flex
          sm3>
          {{ $vuetify.t('Name') }}:
          <strong>{{ customer.reservation_name }}</strong>
        </v-flex>

        <v-flex
          sm3>
          {{ $vuetify.t('Surname') }}:
          <strong>{{ customer.reservation_surname }}</strong>
        </v-flex>

        <v-flex
          sm3>
          {{ $vuetify.t('Phone Number') }}:
          <strong>{{ customer.reservation_phone }}</strong>
        </v-flex>

        <v-flex
          sm3>
          {{ $vuetify.t('E-mail') }}:
          <strong>{{ customer.reservation_email }}</strong>
        </v-flex>
      </v-layout>
      <v-layout
        row>

        <v-flex
          sm3>
          {{ $vuetify.t('Address') }}:
          <strong>{{ customer.reservation_address }}</strong>
        </v-flex>

        <v-flex
          sm3>
          {{ $vuetify.t('City') }}:
          <strong>{{ customer.reservation_city }}</strong>
        </v-flex>

        <v-flex
          sm3>
          {{ $vuetify.t('Province') }}:
          <strong>{{ customer.reservation_state }}</strong>
        </v-flex>
      </v-layout>
      <v-layout/>
      <v-layout
        row>

        <v-flex
          xs12
          sm6>
          <strong class="font-weight-bold subheading">{{ $vuetify.t('Expire Date') }}</strong>
          <v-layout><v-flex
            sm5
            style="color: #B71C1C">
            {{ $vuetify.t('Expire') }}:
            <span>{{ customer.reservation_expiration_date }}</span>
          </v-flex>
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          sm6>
          <v-flex class="subheading">{{ $vuetify.t('Protocol') }}</v-flex>
          <v-flex
            sm6
          >
            {{ $vuetify.t('Protocol Number') }}:
            <strong>{{ customer.reservation_remote_address }}</strong>
          </v-flex>

        </v-flex>

      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'
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
        },
        computed: {
            ...mapGetters('reservation', ['booking', 'customer'])
        }

    }
</script>

<style scoped>

</style>
