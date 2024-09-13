
<script setup>
const props = defineProps(['name'])

console.log(props);
console.log(props.name);

</script>

<template>
    <div>
       <h1>Vis Static props: {{ props.name }}</h1>
    </div>
</template>
<style lang="scss" scoped>

</style>