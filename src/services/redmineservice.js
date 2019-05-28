import {APIService} from './apiservice';
import {REDMINE_API_URL} from '@/config/const'
import {LOCAL_STORAGE_REDMINE_SECRET} from '@/config/const'

let config = {
    headers: {
        "Authorization": "Basic " + localStorage.getItem(LOCAL_STORAGE_REDMINE_SECRET),
        "Accept": "application/json",
        //"cache-control": "no-cache",
    }
};

export class RedmineService extends APIService {

    constructor(endpoint) {
        //super(REDMINE_API_URL, endpoint, config);
        super(REDMINE_API_URL, endpoint);
    }
}