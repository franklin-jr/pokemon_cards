import http from '../api'



let getAll = () => {
  return http.get('cards');
}

let getByName = (name) => {
  return http.get(`cards/?name=${name}`);
}

let getById = (id) => {
  return http.get(`cards/${id}`);
}



export default {
  getAll,
  getByName,
  getById
}