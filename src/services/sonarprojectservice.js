import {SonarService} from './sonarservice';
import {SONAR_PROJECT_ENDPOINT} from '@/config/const'

export class SonarProjectService extends SonarService {

    constructor() {
        super(SONAR_PROJECT_ENDPOINT);
    }

    getSonarProjects() {
        return super.getData();
    }

    getSonarProjectByID(id) {
        return super.getDataBy(id);
    }

}