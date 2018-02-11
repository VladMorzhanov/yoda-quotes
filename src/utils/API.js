import * as axios from 'axios'
import {MASHABLE_KEY, QUOTE_API_ROUTE, YODA_API_ROUTE} from "../constants";

axios.defaults.headers['X-Mashape-Key'] = MASHABLE_KEY

class API {
    static getQuote() {
        return axios({
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            url: QUOTE_API_ROUTE
        })
    }

    static getYodaSaid(text) {
        const url = YODA_API_ROUTE + text.replace(' ', '+')

        return axios({
            method: 'GET',
            headers: {
                'Accept': 'text/plain'
            },
            url: url
        })
    }
}


export default API
