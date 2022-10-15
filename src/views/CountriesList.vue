<!-- START TEMPLATE -->
<template>

    <!-- container wrapper div -->
    <div class="container" style="height: calc(100vh - 52px);">
            <!-- columns wrapper div -->
            <div class="columns mt-0 is-centered" style="height: 100%;">
                <!-- Countries List (column) -->
                <div v-if="isLoaded" class="column is-4" style="overflow: auto">

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

                <div v-if="showIntro" class="column is-8 is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
                    <div class="image is-128x128">
                        <img src="../assets/earth.png" class="imgEarth"/>
                    </div>
                    <div>No seas tímid@ elige un pais :D</div> 
                </div>
                <router-view></router-view>

            </div>
    </div>

</template>
<!-- END TEMPLATE -->
<!-- START SCRIPT -->
<script setup>
    import { useRoute } from 'vue-router'
    import { ref, watch, onMounted } from 'vue';
    import { getCountries } from '../api';
    const isLoaded = ref(false);
    const countries = ref(undefined);
    const showIntro = ref();
    
    // variable donde guardamos nuestra url
    const route = useRoute();
    // miramos si el apartado details esta imprimido
    // si no esta imprimido, meteremos nuestro texto
    if(route.params.code == undefined){
        showIntro.value = true;
    } else if(typeof route.params.code !== 'undefined'){
        showIntro.value = false;
    }
    else {
        showIntro.value = true;
    }

    watch(() => route.params.code, newValue => {
        showIntro.value = false;
    });

    const loadList = async () => {
        countries.value = await getCountries();
        isLoaded.value = true;
    }
    onMounted(async () => {
        loadList();
    });

</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->