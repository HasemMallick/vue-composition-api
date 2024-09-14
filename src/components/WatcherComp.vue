
<script setup>
import { ref, watch } from 'vue'

const message = ref('Old Message')
const someText = ref('Old Text ')

// watch the input message and change the text accordingly
watch(message, (newValue, oldValue) => {
    console.log(oldValue)
    console.log(newValue)
})

watch(someText, (newVal, oldVal) => {
    // perform needful login here 
    console.log("Old text: ", oldVal);
    console.log("New text: ", newVal);
    
})
</script>

<template>
    <h2>Some Message: {{ message }}</h2>
    <button type="submit" @click="message = 'New Message'"  >Change Message</button>

    <hr>

    <input type="text" placeholder="Some text...." v-model="someText">
    <!-- <button type="submit" >Submit</button> -->
    
</template>
