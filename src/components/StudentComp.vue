
<script setup>
const props = defineProps(['studentName','studentAge', 'studentLanguage'])

</script>
<template>
    <div>
        <h2>Student comp</h2>

        <h2>{{ props.studentAge }}</h2>
        <h2>{{ props.studentName }}</h2>
        <h2>{{ props.studentLanguage }}</h2>
    </div>
</template>

<style lang="scss" scoped>

</style>