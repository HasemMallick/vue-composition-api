<script setup>
import { ref } from 'vue'
import ComponentEvent from './components/ComponentEvent.vue';
import FomComponentEvent from './components/FomComponentEvent.vue';

const count = ref(0)

const formHandler = (username, email, password) => {
    console.log("user name: ", username);
    console.log("user email: ", email);
    console.log("user password: ", password);
}
</script>

<template>
    <h2>Counter: {{ count }}</h2>
    <ComponentEvent @incrementCounter="count++" />

    <hr>

    <FomComponentEvent @userInfo="formHandler"/>
</template>
