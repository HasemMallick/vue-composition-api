<script setup>
import { provide } from 'vue'
import SchoolComp from './components/SchoolComp.vue';

// const studentName = "Hasem Mallick"
// const studentAge = 25
// const studentLanguage = ['english', 'hindi', 'bengali']

provide('studentName', 'Hasem Mallick')
provide('studentAge', 25)
provide('studentLanguage', ['english', 'hindi', 'bengali'])


// Using Provide With Array
provide('friends', ['Alex', 'Jordan', 'Mallick', 'John'])

// Using Provide With Object
provide('games', {
    id: 1,
    title: 'Epic Adventure Game',
    genre: ['Action', 'Adventure', 'RPG'],
    platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    releaseDate: '2022-03-15',
    developer: {
        name: 'Awesome Game Studios',
        location: 'San Francisco, CA',
        teamSize: 50
    }
})

// Using Provide With Array Of Objects
provide('moreGames', [
    {
        title: 'Space Explorer',
        genre: 'Sci-Fi',
        platform: 'PC',
        releaseDate: '2023-05-20'
    },
    {
        title: 'Fantasy Quest',
        genre: 'Fantasy',
        platform: 'PlayStation',
        releaseDate: '2023-07-10'
    },
    {
        title: 'Inception',
        director: 'Christopher Nolan',
        genre: 'Sci-Fi',
        releaseDate: '2010-07-16'
    },
    {
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        genre: 'Drama',
        releaseDate: '1994-09-23'
    }
])

</script>

<template>
    <SchoolComp />
</template>
