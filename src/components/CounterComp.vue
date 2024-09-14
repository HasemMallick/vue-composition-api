
<script setup>
import { ref } from 'vue'

// import the composable 
import { useCounter } from '@/composable/useCounter';

// create useCounter instance 
const count = useCounter()

// const count = ref(0)

// const incrementCounter = () => count.value += 1000
// const decrementCounter = () => count.value -= 1000

</script>

<template>
    <div>
        <h2>Counter: {{ count.count }}</h2>
        
        <button type="button" @click="count.incrementCounter">Increment</button>
        <button type="button" @click="count.decrementCounter">Decrement</button>
    </div>
</template>

<style lang="scss" scoped>

</style>