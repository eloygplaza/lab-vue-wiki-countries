<template>
  
    <Navbar></Navbar>
    <!-- El router view se encargará de poner el componente que haga falta -->
    <router-view></router-view>

</template>
  
<script setup>
    import Navbar from './components/Navbar.vue';

</script>
  
<style scoped>
  
</style>
