import axios from 'axios';
import {SERVICE_URL} from '@/config/const'

let config = {
    headers: {
        "Authorization": "bearer " + localStorage.getItem('accessToken'),
        "Accept": "application/json",
        //"cache-control": "no-cache",
    }
}

export class APIService {

    apiUrl = '';

    constructor(endpoint) {
        if(endpoint == null || endpoint === '') {
            this.apiUrl = `${SERVICE_URL}`;
        } else {
            this.apiUrl = `${SERVICE_URL}/${endpoint}`;
        }
    }

    // if URL is not provided from const SERVICE_URL
    changeApiUrlTo(apiUrl) {
        this.apiUrl = apiUrl;
    }

    getDataFromUrl(url) {
        // eslint-disable-next-line
        console.log(url)
        return axios.get(url,config).then(response => response.data);
    }

    getData() {
        const url = `${this.apiUrl}`;
        // eslint-disable-next-line
        console.log(url)
        return axios.get(url,config).then(response => response.data);
    }

    getDataBy(param) {
        const url = `${this.apiUrl}/${param}`;
        // eslint-disable-next-line
        console.log(url)
        return axios.get(url,config).then(response => response.data);
    }

    insertData(data) {
        const url = `${this.apiUrl}`;
        // eslint-disable-next-line
        console.log(url)
        return axios.post(url,data,config);
    }

    updateDataBy(data, param) {
        const url = `${this.apiUrl}/${param}`;
        // eslint-disable-next-line
        console.log(url)
        return axios.put(url,data,config);
    }

    updateDataByID(data) {
        const url = `${this.apiUrl}/${data.id}`;
        // eslint-disable-next-line
        console.log(url)
        return axios.put(url,data,config);
    }

    deleteDataBy(data, param){
        const url = `${this.apiUrl}/${param}`;
        // eslint-disable-next-line
        console.log(url)
        return axios.delete(url,data,config);
    }

    deleteDataByID(data) {
        const url = `${this.apiUrl}/${data.id}`;
        // eslint-disable-next-line
        console.log(url)
        return axios.delete(url,data,config);
    }

}