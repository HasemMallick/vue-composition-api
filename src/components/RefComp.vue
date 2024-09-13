
<script setup>
import { ref } from "vue";

const count = ref(0)

const user = ref("Hasem")

const userList = ref(["Hasem", 'Ahsan', 'Ulfat'])

const userInfo = ref({name: "Hasem", age: 25, lang: ['bengali', 'english', 'hindi']})
</script>

<template>
    <div>
        <h1>Counter: {{ count }}</h1>
        <button type="button" @click="count += 10">Add</button>
    </div>

    <hr>

    <div>
        <h1>User: {{ user }}</h1>
        <button type="button" @click="user = 'Mallick'">Change User</button>
    </div>

    <hr>

    <div>
        <h1>User list: {{ userList }}</h1>
        <button type="button" @click="userList.push('Mallick')">Add User</button>
    </div>

    <hr>

    <div>
        <h1>User info</h1>
        <h2>User Name: {{ userInfo.name }}</h2>
        <h2>User age: {{ userInfo.age }}</h2>
        <h2>User language: {{ userInfo.lang }}</h2>


        <button type="button" @click="userInfo.name = 'Mallick'" >Change Name</button>
        <button type="button" @click="userInfo.age = 20" >Change Age</button>
        <button type="button" @click="userInfo.lang = ['urdu']" >Change Language</button>
    </div>
</template>

<style lang="scss" scoped>

</style>