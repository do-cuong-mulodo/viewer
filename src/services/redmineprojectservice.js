import {RedmineService} from './redmineservice';
import {REDMINE_PROJECT_ENDPOINT} from '@/config/const'

export class RedmineProjectService extends RedmineService {

    constructor() {
        super(REDMINE_PROJECT_ENDPOINT);
    }

    getRedmineProjects() {
        return super.getData();
    }

    getRedmineProjectByID(id) {
        return super.getDataBy(id);
    }

}