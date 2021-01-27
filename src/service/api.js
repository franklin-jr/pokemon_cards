import axios from 'axios';



let baseURL = 'https://api.pokemontcg.io/v1/'


const instance = axios.create({
  baseURL
});


export default instance;