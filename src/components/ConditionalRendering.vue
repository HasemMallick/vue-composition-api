<script setup>
import { ref } from 'vue';

const isTrue = true;
const isFalse = false;

const toggleUser = ref(false)
</script>

<template>
    <div>
        <h1 v-if="isTrue" >Do some operation</h1>
    </div>

    <hr>

    <div>
        <h1 v-if="isFalse" >Do Some operation</h1>

        <h1 v-if="!isFalse" >Do Some operation</h1>
    </div>

    <hr>
    <div>
        <button type="button" @click="toggleUser = !toggleUser" >Check User</button>

        <div v-if="toggleUser" >
            <p>User logged in </p>
        </div>

        <div v-else >
            <p>user not logged in</p>
        </div>
        
    </div>

</template>


<style lang="scss" scoped>

</style>