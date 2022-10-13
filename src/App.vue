<template>
  
    <Navbar></Navbar>
    <router-view></router-view>

    <!-- en el router view se cargara el componente del router -->
</template>
  
<script setup>
    import Navbar from './components/Navbar.vue';
    import CountriesList from './views/CountriesList.vue';
    import CountriesDetails from './views/CountriesDetails.vue';

   //console.log(countries);
</script>
  
<style scoped>
  
</style>
