
<script setup>
const color = ['red', 'orange', 'green', 'blue', 'white']
</script>

<template>
    <h2>Async component </h2>
    <ul v-for="(co, index) in color" :key="index" >
        <li>{{ co }}</li>
    </ul>
</template>

<style lang="scss" scoped>

</style>