export const countriesApi = async () => {
  const res = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  ).then((res) => res.json());
  return res;
};

//console.log(results);
