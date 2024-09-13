
<script setup>
import { inject } from 'vue';

const studentName = inject('studentName')
const studentAge = inject('studentAge')
const studentLanguage = inject('studentLanguage')

</script>

<template>
    <div>
        <h2>Student comp</h2>

        <h2>{{ studentAge }}</h2>
        <h2>{{ studentName }}</h2>
        <h2>{{ studentLanguage }}</h2>
    </div>
</template>

<style lang="scss" scoped>

</style>