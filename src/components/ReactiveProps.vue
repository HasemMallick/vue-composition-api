<script setup>
// Props are read only mutation is not allowed in props
const props = defineProps(['count'])

// console.log(props.count);

</script>
<template>
    <div>
        <h2>Counter: {{ props.count }}</h2>
        <button type="submit" @click="props.count += 5" >+</button>
    </div>
</template>


<style lang="scss" scoped>

</style>