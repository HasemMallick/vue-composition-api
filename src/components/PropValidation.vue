
<script setup>
// basic prop validation 
// const props = defineProps({
//     name: String,
//     age: Number,
//     lang: Array
// })

// advance prop validation 
const props = defineProps({
    name:{
        type: String,
        required: true,
        default: "Provide Name "
    },
    age: {
        type: Number,
        required: true,
    },
    lang: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div>
        <h2>{{ props.name }}</h2>
        <h2>{{ props.age }}</h2>
        <h2>{{ props.lang }}</h2>
    </div>
</template>

<style lang="scss" scoped>

</style>