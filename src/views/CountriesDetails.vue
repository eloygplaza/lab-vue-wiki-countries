<!-- START TEMPLATE -->
<template>

    <div class="column is-8">
        <section class="section">

            <figure class="image is-128x128">
                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`">
            </figure>
            <div class="title">{{}}</div>
            <table class="table is-fullwidth">
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{{country.capital[0]}}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>551695 km <sup>2</sup></td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                <li><a href="/AND">Andorra</a></li>
                                <li><a href="/BEL">Belgium</a></li>
                                <li><a href="/DEU">Germany</a></li>
                                <li><a href="/ITA">Italy</a></li>
                                <li><a href="/MCO">Monaco</a></li>
                                <li><a href="/ESP">Spain</a></li>
                                <li><a href="/CHE">Switzerland</a></li>
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
    import { ref, watch, defineProps } from 'vue'
    import countries from '../assets/countries.json';

    const route = useRoute();
    const code = ref();
    const country = ref();

    // fetch the user information when params change
    watch(() => {
        code.value = route.params.code
        
        // recoger pais
        country.value = getCountry(code.value);

        // esto funciona
        console.log(country.value.alpha2Code.toLowerCase());
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