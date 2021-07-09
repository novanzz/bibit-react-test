import axios from 'axios';

class BaseApi {
  constructor() {
    this.api_key = "faf7e5bb"
    this.baseUrl = "http://www.omdbapi.com/"
  }

  getMovies(query,page) {
    return axios.get(this.baseUrl +"?apikey="+this.api_key + "&s=" + query + "&page="+page)
  }

  getDetail(query) {
    return axios.get(this.baseUrl +"?apikey="+this.api_key + "&i=" + query + "&plot=full")
  }
}

export default BaseApi;
