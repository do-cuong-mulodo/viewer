<style scoped>

.vue-logo-back {
    background-color: black;
}

</style>

<template>

<div class="home">
    <div class="vue-logo-back">
        <img src="@/assets/logo.png" width="100px" height="100px">
    </div>
    <div>
        <h4>Git Repository</h4>
        <ol>
            <li v-for="repo in repos" :key="repo.id">
                ID: {{ repo.id }} -
                Name: {{ repo.name }} -
                Private: {{ repo.private}}</li>
        </ol>
    </div>
    <div>
        <h4>Sonar Projects</h4>
        <ol>
            <li v-for="sonarProject in sonarProjects" :key="sonarProject.id">
                ID: {{ sonarProject.id }} -
                Name: {{ sonarProject.name }} -
                Visibility: {{ sonarProject.visibility}}</li>
        </ol>
    </div>
    <div>
        <h4>Redmine Projects</h4>
        <ol>
            <li v-for="redmineProject in redmineProjects" :key="redmineProject.id">
                ID: {{ redmineProject.id }} -
                Name: {{ redmineProject.name }} -
                Is Public: {{ redmineProject.is_public}}</li>
        </ol>
    </div>
</div>

</template>

<script>

import axios from 'axios'

// declare service to call API
import {GitRepoService} from '@/services/gitreposervice'
const gitRepoService = new GitRepoService();

import {SonarProjectService} from '@/services/sonarprojectservice'
const sonarProjectService = new SonarProjectService();

import {RedmineProjectService} from '@/services/redmineprojectservice'
const redmineProjectService = new RedmineProjectService();

// get token, secret from config
import {GIT_ACCESS_TOKEN} from '@/config/const'
import {SONAR_SECRET} from '@/config/const'
import {REDMINE_SECRET} from '@/config/const'
import {LOCAL_STORAGE_GIT_TOKEN} from '@/config/const'
import {LOCAL_STORAGE_SONAR_SECRET} from '@/config/const'
import {LOCAL_STORAGE_REDMINE_SECRET} from '@/config/const'

// store token, secret
localStorage.setItem(LOCAL_STORAGE_GIT_TOKEN, GIT_ACCESS_TOKEN);
localStorage.setItem(LOCAL_STORAGE_SONAR_SECRET, SONAR_SECRET);
localStorage.setItem(LOCAL_STORAGE_REDMINE_SECRET, REDMINE_SECRET);

export default {
    name: 'home',
    mounted() {
        // call REST api and store response value into data
        this.getAllRepos();
        this.getAllSonarProjects();
        this.getAllRedmineProjects();
    },
    data() {
        return {
            repos: [],
            sonarProjects: [],
            redmineProjects: []
        }
    },
    methods: {
        getAllRepos() {
            gitRepoService.getRepos().then((response) => {
                this.repos = response
            })
            .catch((e) => {
                console.error(e)
            })
        },
        getAllSonarProjects() {
            sonarProjectService.getSonarProjects().then((response) => {
                //this.sonarProjects = response
                this.sonarProjects = response.components
            })
            .catch((e) => {
                console.error(e)
            })
        },
        getAllRedmineProjects() {
            redmineProjectService.getRedmineProjects().then((response) => {
                //this.redmineProjects = response
                this.redmineProjects = response.projects;
            })
            .catch((e) => {
                console.error(e)
            })
        }
    }
}

</script>