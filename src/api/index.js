//axios es un libreria que te permite hacer fetch
import axios from "axios";

//creamos una instancia de la pokeapi
// timeout corta la peticion cuando pasa el timepo en ms
const countryApi = axios.create({
  baseURL: "https://ih-countries-api.herokuapp.com/countries/",
  timeout: 3000,
});

export const getCountry = async (alpha3Code) => {
  try {
    const response = await countryApi.get(alpha3Code);
    //.data es parecido al .json del fetch pero no es una promesa
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCountries = async () => {
  try {
    const response = await countryApi.get("");
    //.data es parecido al .json del fetch pero no es una promesa
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
