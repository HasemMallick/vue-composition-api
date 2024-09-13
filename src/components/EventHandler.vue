
<script setup>
import { ref } from "vue"

// To add event we must need *reactive element*
const count = ref(100)
</script>

<template>
    <div>
        <h2 >Counter: {{ count }}</h2>

        <!-- v-on:eventName=eventMethod (old syntax)  -->
        <button v-on:click="count++">Increment</button>

        <!-- @eventName=eventMethod (new & shorthand syntax) -->
        <button @click="count--">Decrement</button>
    </div>
</template>
<style lang="scss" scoped>

</style>