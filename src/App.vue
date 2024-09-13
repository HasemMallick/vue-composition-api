<script setup>
import { reactive } from 'vue'
import DynamicProps from './components/DynamicProps.vue';
import ReactiveProps from './components/ReactiveProps.vue';
import StaticProps from './components/StaticProps.vue';
import PropValidation from './components/PropValidation.vue';
import CustomPropValidation from './components/CustomPropValidation.vue';

const name = "Hasem"
const age = 25
const lang = ['english', 'hindi', 'bengali']
const obj = {lang: ['english', 'hindi', 'bengali']}

const count = reactive({count: 0})

</script>

<template>
    <StaticProps name="Hasem Mallick" />
    <hr>
    <DynamicProps :name="name" :age="age" :lang="lang" />
    <hr>
    <ReactiveProps :count="count.count" />
    <hr>
    <PropValidation :name="name" :age="age" :lang="lang" />
    <hr>
    <CustomPropValidation :name="name" :age="age" :lang="lang" :obj="obj" />
</template>
