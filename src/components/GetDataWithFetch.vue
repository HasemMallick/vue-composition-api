
<script setup>
import { ref } from 'vue'

const data = ref(null)

const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/100').then((response) => {
            // check the response is ok or not
            if (!response.ok) {
                throw new Error(`HTTP Error! Status Code: ${response.status}`)
            }

            // parse the JSON             
            return response.json()
        }).then((responseData) => {
            console.log("Data", responseData);
            data.value = responseData
        }).catch((error)=> {
            console.error("Error: ", error)
        })
}

const todo = ref(null)

const fetchTodo =  () => {
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {

        // if (response.ok) {
        //     return response.json()
        // } else {
        //     console.log("Some Error");
        // }

        // better practice 
        if (!response.ok) {
            throw new Error("HTTP Error", response.status);
        } 

        return response.json()

    }).then((repsonseData) => {
        todo.value = repsonseData
    }).catch((error) => {
        console.error(error)
    })
}
</script>

<template>
    <div>
        <h2>Fetched Data: {{ data }}</h2>
        <button type="button" @click="fetchData">Fetch Data</button>
    </div>

    <hr>

    <div>
        <h2>200 Todo:</h2>
        <ol v-for="({userId, id, completed, title}, i) in todo" :key="i" >
            <li>{{ userId }}</li>
            <li>{{ id }}</li>
            <li>{{ completed }}</li>
            <li>{{ title }}</li>
        </ol>
        <button @click="fetchTodo">Get 100 Todo</button>
    </div>
</template>

<style lang="scss" scoped>

</style>