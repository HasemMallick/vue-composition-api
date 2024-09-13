<script setup>
import { ref } from 'vue'
const names = ['Hasem', 'Mallick', 'Ahsan', 'Ulfat', 'Zuhail']

const books = ref([
    {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Fiction',
        publicationYear: 1960
    },
    {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        publicationYear: 1949
    },
    {
        id: 3,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Classic',
        publicationYear: 1925
    },
    {
        id: 4,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        genre: 'Coming-of-age',
        publicationYear: 1951
    },
    {
        id: 5,
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        genre: 'Fantasy',
        publicationYear: 1997
    }
])

const movies = ref([
  [
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    "Schindler's List",
    'The Green Mile'
  ],
  ['Pulp Fiction', 'Fight Club', 'Forrest Gump', 'The Silence of the Lambs', 'The Usual Suspects'],
  [
    'Inception',
    'The Matrix',
    'Interstellar',
    'Blade Runner',
    'Eternal Sunshine of the Spotless Mind'
  ],
  ['The Lord of the Rings', 'Star Wars', 'Harry Potter', 'The Hobbit', 'Jurassic Park'],
  ['Titanic', 'Avatar', 'The Terminator', 'The Sixth Sense', 'Gladiator']
])

const games = ref({
  id: 1,
  title: 'Epic Adventure Game',
  genre: ['Action', 'Adventure', 'RPG'],
  platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
  releaseDate: '2022-03-15',
  developer: {
    name: 'Awesome Game Studios',
    location: 'San Francisco, CA',
    teamSize: 50
  },
  ratings: {
    metacritic: 90,
    user: 4.8
  },
  features: {
    singlePlayer: true,
    multiplayer: true,
    onlineCoop: true,
    splitScreen: false
  },
  systemRequirements: {
    minimum: {
      os: 'Windows 10',
      processor: 'Intel Core i5',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 970',
      storage: '50 GB available space'
    },
    recommended: {
      os: 'Windows 11',
      processor: 'Intel Core i7',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 3080',
      storage: '100 GB available space'
    }
  },
  storyline: 'Embark on a thrilling adventure to save the world from impending doom!',
  characters: ['Hero', 'Sidekick', 'Villain', 'NPCs'],
  achievements: [
    { id: 1, name: 'Master Explorer', description: 'Explore every corner of the game world' },
    { id: 2, name: 'Legendary Warrior', description: 'Complete the game on the hardest difficulty' }
  ]
})

const complexGamesObj = ref({
  game1: {
    title: 'Space Explorer',
    genre: 'Sci-Fi',
    platform: 'PC',
    releaseDate: '2023-05-20'
  },
  game2: {
    title: 'Fantasy Quest',
    genre: 'Fantasy',
    platform: 'PlayStation',
    releaseDate: '2023-07-10'
  },
  movie1: {
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    releaseDate: '2010-07-16'
  },
  movie2: {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'Drama',
    releaseDate: '1994-09-23'
  },
  book1: {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    publicationYear: 1965
  },
  book2: {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publicationYear: 1960
  }
})

</script>

<template>
    <div>
        <h2>names Array</h2>
        <div v-for="(name, index) in names" :key="index">
            <li> {{ name }}</li>
        </div>
    </div>

    <hr>

    <div>
        <!-- not good practice  -->
        <!-- <h2>Books Array</h2>
        <div v-for="(book, index) in books" :key="index" >
            <li>{{  book.title }}</li>
            <li>{{  book.author }}</li>
            <li>{{  book.id }}</li>
            <li>{{  book.publicationYear }}</li>
            <hr>
        </div> -->

        <!-- Array destructure -->


        <h2>Book Array - Array of objects</h2>
        <ul v-for="({title, author, director, publicationYear, genre}, i) in books" :key="i" >
            <li>{{ title }}</li>
            <li>{{ author }}</li>
            <li>{{ director }}</li>
            <li>{{ publicationYear }}</li>
            <li>{{ genre }}</li>
        </ul>
    </div>

    <!-- Nested For loop -->
    <div>
        <h2>Movies Array - Array of arrays</h2>
        <ul v-for="(movie, index) in movies" :key="index">
            <li v-for="(item, i) in movie" :key="i" >{{ item }}</li>
        </ul>
    </div>

    <div>
        <h2>Games Object - A Bit Complex Structure </h2>
        <ul v-for="(game, key, index) in games" :key="index">
            {{ index }} == {{ key }} == {{ game }}
        </ul>
    </div>

    <div>
        <!-- Nested For loop -->
        <h2>Complex Game Object</h2>
        <ul v-for="(game, index) in complexGamesObj" :key="index" >
            <li v-for="(ga, i) in game" :key="i" >{{ ga }}</li>
        </ul>

        <!-- destructure -->
         <ol v-for="({ author, genre, platform, releaseDate }, index) in complexGamesObj" :key="index">  
            <li>{{ author }}</li>
            <li>{{ genre }}</li>
            <li>{{ platform }}</li>
            <li>{{ releaseDate }}</li>
         </ol>
    </div>
</template>
<style lang="scss" scoped></style>