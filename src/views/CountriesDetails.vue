<!-- START TEMPLATE -->
<template>

    <div class="column is-8" v-if="isLoaded">
        <section class="section">

            <figure class="image is-128x128">
                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`">
            </figure>
            <div class="title">{{country ? country.name.common : ''}}</div>
            <table class="table is-fullwidth">
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{{country ? country.capital[0] : ''}}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{{country ? country.area : ''}} km <sup>2</sup></td>
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
    import { ref, watch, onMounted } from 'vue';
    import { getCountry } from '../api';
    
    // variable donde guardamos nuestra url
    const route = useRoute();
    // variable para mostrar el apartado de details
    const isLoaded = ref(false);
    // variable donde guardaremos el pais
    const country = ref('');

    const loadDetails = async () => {
        country.value = await getCountry(route.params.code);
        isLoaded.value = true;
    }

    // mira si alguna variable reactive cambia de valor - en este caso route (url navegador)
    // al entrar escondemos details y esperamos que se ejecute la funcion antes de vovler al mostrarla
    watch(async () => route.params.code, async newValue => {
        isLoaded.value = false; 
        await loadDetails();
    });

    // al montar el template, carga la funcion para que le devuelva los datos que necesita
    onMounted(async () => {
        await loadDetails();
    });
    
</script>
<!-- END SCRIPT -->
<!-- START STYLE -->
<style scoped>
</style>
<!-- END STYLE -->