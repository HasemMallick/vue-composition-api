
<script setup>
import { useCounter } from '@/composable/useCounter';

const counter = useCounter()

</script>

<template>
    <div>
        <h2>Another Counter component </h2>
        
        <h1>Count: {{ counter.count }}</h1>
        <button type="button" @click="counter.incrementCounter">+</button>
        <button type="button" @click="counter.decrementCounter">-</button>
    </div>
</template>

<style lang="scss" scoped>

</style>