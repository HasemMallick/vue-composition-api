
<script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const name = ref('Hasem')

// to pass the multiple value in watcher we have to pass the array 
watch([count, name], (newVal,  oldVal) => {
    console.log("Old Count: ", oldVal);
    console.log("New Count: ", newVal);
    
    
})
</script>

<template>
    <h2>Counter: {{ count }}</h2>
    <button type="button" @click="count +=10" >Increment</button>

    <h2>Name: {{ name }}</h2>
    <button @click="name = 'Mallick'">Change Name</button>
</template>

<style lang="scss" scoped>

</style>