<script setup>
import { ref, computed } from 'vue';

const num = ref(5)
const squaredNum = computed(() => {
    return num.value * num.value
})

const sqNum = ref(5)
const sqNumComputed = computed(()=> sqNum.value * sqNum.value)

const fName = ref("Hasem")
const lName = ref('Mallick')
const fullName = computed(() => `${fName.value} ${lName.value}`)

</script>

<template>
    <div>
        <h1>Original Number: {{ num }}</h1>
        <h1>Computed variable {{ squaredNum }}</h1>
    </div>

    <hr>
    <!-- update the computed based on the reactive state -->
    <div>
        <h1>Original Number: {{ sqNum }}</h1>
        <h1>Computed variable {{ sqNumComputed }}</h1>
        <button type="button" @click="sqNum++">+</button>
    </div>

    <hr>

    <div>
        <h1>First Name: {{ fName }} </h1>
        <h1>Last Name: {{ lName }} </h1>

        <h1>Full Name: {{ fullName }}</h1>
    </div>
</template>


<style lang="scss" scoped>

</style>