
<script setup>
import { inject } from 'vue';

const friends = inject('friends')
const games = inject('games')
const moreGames = inject('moreGames')

</script>

<template>
    <div>
        <h2>Student Two</h2>

        <ul v-for="(friend, index) in friends" :key="index" >
            <li>{{ friend }}</li>
        </ul>

        <hr>

        <ul v-for="(game, index) in games" :key="index" >
            <li>{{ game }}</li>

            <!-- <li v-for="(gm, i) in game" :key="i" >{{ gm }}</li> -->
        </ul>

        <hr>

        <ul v-for="(moreGame, index) in moreGames" :key="index" >
            <li>{{ moreGame }}</li>
        </ul>

        <hr>

        <ol v-for="({title, genre, platform, releaseDate, director}, index) in moreGames" :key="index" >
            <li>{{ title }}</li>
            <li>{{ genre }}</li>
            <li>{{ platform }}</li>
            <li>{{ releaseDate }}</li>
            <li>{{ director }}</li>
        </ol>
    </div>
</template>

<style lang="scss" scoped>

</style>