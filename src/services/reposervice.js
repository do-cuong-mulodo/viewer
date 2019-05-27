import {APIService} from './apiservice';
import {REPOS_ENDPOINT} from '@/config/const'

const ENDPOINT = REPOS_ENDPOINT;
export class RepoService extends APIService {

    constructor() {
        super(ENDPOINT);
    }

    getRepos() {
        return super.getData();
    }

    getRepoByID(id) {
        return super.getDataBy(id);
    }

    addRepo(repo) {
        return super.insertData(repo);
    }

    editRepo(repo) {
        return super.updateDataByID(repo);
    }

    deleteRepo(repo) {
        return super.deleteDataByID(repo);
    }

}