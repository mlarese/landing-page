<template>
  <div>
    <carousel/>
    <welcome/>
    <formbooking/>
    <roomselection/>
  </div>
</template>
<script>
    import formbooking from '../../components/LandingForm/formbooking'
    import carousel from '../../components/Landing/carousel'
    import welcome from '../../components/Landing/welcome'
    import roomselection from '../../components/Room/roomselection'
    export default {
        name: "IndexVue",
        components: {carousel, welcome, formbooking,roomselection}
    }
</script>

<style scoped>

</style>
