<template>
  <div>

    <carousel/>
    <welcome/>
    <formbooking/>
  </div>
</template>
<script>
    import formbooking from '../../components/LandingForm/formbooking'
    import carousel from '../../components/Landing/carousel'
    import welcome from '../../components/Landing/welcome'
    export default {
        name: "IndexVue",
        components: {carousel, welcome, formbooking}
    }
</script>

<style scoped>

</style>
