<script setup>
const props = defineProps(['name', 'age', 'lang'])

console.log(props)
</script>

<template>
    <div>
        <li>
            {{ props.name }}
        </li>
        <li>
            {{ props.age }}
        </li>

        <li v-for="(la, i) in props.lang" :key="i">
            {{ la }}
        </li>
    </div>
</template>

<style lang="scss" scoped></style>