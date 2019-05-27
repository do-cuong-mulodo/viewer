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
        <ol>
            <li v-for="repo in repos" :key="repo.id">
                ID: {{ repo.id }} -
                Name: {{ repo.name }} -
                Private: {{ repo.private}}</li>
        </ol>
    </div>
</div>

</template>

<script>

import axios from 'axios'
import {ACCESS_TOKEN} from '@/config/const'
import {RepoService} from '@/services/reposervice'
const repoService = new RepoService();

localStorage.setItem('accessToken', ACCESS_TOKEN);

export default {
    name: 'home',
    mounted() {
        this.getAllRepos();
    },
    data() {
        return {
            repos: [],
        }
    },
    methods: {
        getAllRepos() {
            repoService.getRepos().then((response) => {
                this.repos = response
            })
            .catch((e) => {
                console.error(e)
            })
        }
    }
}

</script>