<!-- START TEMPLATE -->
<template>

    <div class="column is-8">
        <section class="section">

            <figure class="image is-128x128">
                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`">
            </figure>
            <div class="title">{{country.name.common}}</div>
            <table class="table is-fullwidth">
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{{country.capital[0]}}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{{country.area}} km <sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                
                                <router-link v-for="border in country.borders" :to="{name: 'details', params: {code: border}}">
                                    <li>{{border}}</li>
                                </router-link>
                                
                            </ul>
                        </td>
                    </tr>

                </tbody>
            </table>
        </section>
    </div>

</template>
<!-- END TEMPLATE -->
<!-- START SCRIPT -->
<script setup>
    import { useRoute } from 'vue-router'
    import { ref, watch } from 'vue'
    import countries from '../assets/countries.json';
    import { countriesApi } from '../helpers';

    const route = useRoute();
    const country = ref();

    // con api, pero no funciona
    const results = countriesApi();
    console.log(results);

    // mira si algun reactive data cambia el valor - en este caso route (url navegador)
    watch(() => {
        // recoger el objeto del pais introducido
        country.value = getCountry(route.params.code);

        // esto funciona
        //console.log(country.value.alpha2Code.toLowerCase());
    });


    function getCountry(code){
        return countries.find(element => element.alpha3Code == code);
    }

</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->