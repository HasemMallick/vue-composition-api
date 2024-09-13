<script setup>
import SchoolComp from './components/SchoolComp.vue';

const studentName = "Hasem Mallick"
const studentAge = 25
const studentLanguage = ['english', 'hindi', 'bengali']
 
</script>

<template>
    <SchoolComp :studentName="studentName" :studentAge="studentAge" :studentLanguage="studentLanguage"/>
</template>
