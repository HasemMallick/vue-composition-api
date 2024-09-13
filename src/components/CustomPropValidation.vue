<script setup>
const props = defineProps({
    name:{
        type: String,
        validator: (propValue) => {
            return ['Hasem', 'Mallick', 'bengali'].includes(propValue)  // is the name is exists in the provided array or  not
        } 
    },
    age: {
        type: Number,
        validator: (propValue) => {
            return (propValue > 18 && propValue < 30)
        }
    },
    lang: {
        type: Array,
        required: true,
    },
    obj: {
        type: Object
    }
})
</script>
<template>
    <div>
        <h1>{{ props.name }}</h1>
        <h1>{{ props.age }}</h1>
        <h2>{{ props.lang }}</h2>
        <h2>{{ props.obj }}</h2>
    </div>
</template>


<style lang="scss" scoped>

</style>