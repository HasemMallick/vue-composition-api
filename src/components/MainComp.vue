
<script setup>
import { ref } from 'vue'
import CompOne from './CompOne.vue';
import CompTwo from './CompTwo.vue';
import CompThree from './CompThree.vue';

const currentTab = ref('CompOne')

const tabs = {
    CompOne,
    CompTwo,
    CompThree
}

</script>

<template>
    <div>
        <h2>Main Component</h2>
        <button type="button" @click="currentTab = 'CompOne'">HTML</button>
        <button type="button" @click="currentTab = 'CompTwo'">CSS </button>
        <button type="button" @click="currentTab = 'CompThree'">Vue</button>
    </div>

    <component :is="tabs[currentTab]" />

</template>

<style lang="scss" scoped>

</style>