<!-- in this example the component is loaded in the app but it is not visible (check the network tab) -->
<!-- <script setup>
import { ref } from 'vue'
import AsyncComp from './AsyncComp.vue';

const showComp = ref(false)

const getAsyncComp = () => (showComp.value = !showComp.value)

</script>

<template>
    <div v-if="showComp" >
        <AsyncComp />
    </div>
    <button @click="getAsyncComp">Get Async Comp</button>
</template>

<style lang="scss" scoped>

</style> -->

<!-- render the component asynchronously using defineAsyncComponent -->
<script setup>
import { ref, defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent(() => import('./AsyncComp.vue'))

const showComp = ref(false)

const getAsyncComp = () => (showComp.value = !showComp.value)

</script>

<template>
    <div v-if="showComp" >
        <AsyncComp />
    </div>
    <button @click="getAsyncComp">Get Async Comp</button>
</template>

<style lang="scss" scoped>

</style>