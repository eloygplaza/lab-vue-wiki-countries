<!-- START TEMPLATE -->
<template>

    <!-- container wrapper div -->
    <div class="container" style="height: calc(100vh - 52px);">
            <!-- columns wrapper div -->
            <div class="columns mt-0 " style="height: 100%;">
                <!-- Countries List (column) -->
                <div class="column is-4" style="overflow: auto">

                    <router-link v-for="country in countries" class="media is-clickable" :to="{name: 'details', params: {code: country.alpha3Code}}">

                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{country.alpha3Code}}</strong>
                                </p>
                            </div>
                        </div>

                    </router-link>

                </div>

                <router-view></router-view>

            </div>
    </div>

    <!-- en el router view se cargara el componente del router -->
    <!-- <RouterLink></RouterLink> -->
</template>
<!-- END TEMPLATE -->
<!-- START SCRIPT -->
<script setup>
    import countries from '../assets/countries.json';

</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->