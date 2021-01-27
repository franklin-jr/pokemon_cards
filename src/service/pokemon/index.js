import http from '../api'



let getAll = () => {
  return http.get('cards');
}

let getByName = (name) => {
  return http.get(`cards/?name=${name}`);
}


/* debounceSearch() {
  clearTimeout(this.debounce)
  this.debounce = setTimeout(() => {
    this.createGetDataSource()
  }, 900)
}, */

export default {
  getAll,
  getByName
}