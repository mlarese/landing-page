<template>
  <div>
    <carousel/>
    <welcome/>
  </div>
</template>
<script>
    import carousel from '../../components/Landing/carousel'
    import welcome from '../../components/Landing/welcome'
    const root = {root: true}
    export default {
        name: "IndexVue",
        components: {carousel, welcome}
    }
</script>

<style scoped>

</style>
