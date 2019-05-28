import {APIService} from './apiservice';
import {SONARQUBE_API_URL} from '@/config/const'
import {LOCAL_STORAGE_SONAR_SECRET} from '@/config/const'

let config = {
    headers: {
        "Authorization": "Basic " + localStorage.getItem(LOCAL_STORAGE_SONAR_SECRET),
        "Accept": "application/json",
        //"cache-control": "no-cache",
    }
};

export class SonarService extends APIService {

    constructor(endpoint) {
        //super(SONARQUBE_API_URL, endpoint, config);
        super(SONARQUBE_API_URL, endpoint);
    }
}