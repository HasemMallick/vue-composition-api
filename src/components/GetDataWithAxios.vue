
<script setup>
import { ref } from 'vue'
import axios from 'axios';

const posts = ref(null)

const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

        // custom error handling
        // if (!response.status === 200) {
        //     throw new Error("HTTP Error", response.status);
        // }

        // assign the response 
        posts.value = response.data
    } catch (error) {
        console.error(`Error ${error}`)
    }
}
</script>

<template>
    <div>
        <h2>Posts Request Response </h2>
        <!-- <ol v-for="(post, index) in posts" :key="index" > 
            <li>{{ post }}</li>
        </ol> -->

        <!-- destructuring -->
        <ol v-for="({id, userId, title, body}, index) in posts" :key="index" >
            <li>{{ id }}</li>
            <li>{{ userId }}</li>
            <li>{{ title }}</li>
            <li>{{ body }}</li>
        </ol>
        <button type="button" @click="getPosts">Get Posts</button>
    </div>
</template>

<style lang="scss" scoped>

</style>