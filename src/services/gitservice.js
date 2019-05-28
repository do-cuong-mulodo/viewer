import {APIService} from './apiservice';
import {GIT_API_URL} from '@/config/const'
import {LOCAL_STORAGE_GIT_TOKEN} from '@/config/const'

let config = {
    headers: {
        "Authorization": "bearer " + localStorage.getItem(LOCAL_STORAGE_GIT_TOKEN),
        "Accept": "application/json",
        //"cache-control": "no-cache",
    }
};

export class GitService extends APIService {

    constructor(endpoint) {
        //super(GIT_API_URL, endpoint, config);
        super(GIT_API_URL, endpoint);
    }
}