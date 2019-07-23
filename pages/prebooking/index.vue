<template>
  <div>
    <headers/>
    <welcome
    />
    <formbooking/>
    <roomselection/>
    <footerimg/>
    <footername/>
  </div>
</template>
<script>
    import {mapState} from 'vuex'
    const root = {root: true}
    import formbooking from '../../components/LandingForm/formbooking'
    import headers from '../../components/Landing/headers'
    import welcome from '../../components/Landing/welcome'
    import roomselection from '../../components/Room/roomselection'
    import footerimg from '../../components/Footer/footerimg'
    import footername from '../../components/Footer/footername'
    export default {
        name: "IndexVue",
        components: {headers, welcome, formbooking,roomselection, footerimg, footername},
        computed: {
            ...mapState('reservation', ['list']),

        },
        async fetch({store}) {
            await store.dispatch('reservation/load', {}, root)
        }
    }
</script>

<style scoped>

</style>
