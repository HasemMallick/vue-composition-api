
<!-- <script setup>
import StudentComp from './StudentComp.vue';

defineProps(['studentName','studentAge', 'studentLanguage'])

</script>
<template>
    <StudentComp :studentName="studentName" :studentAge="studentAge" :studentLanguage="studentLanguage" />
</template>

<style lang="scss" scoped>

</style> -->


<!-- <script setup>
import StudentComp from './StudentComp.vue';

// defineProps(['studentName','studentAge', 'studentLanguage'])
const props = defineProps(['studentName','studentAge', 'studentLanguage'])

</script>
<template>
    <StudentComp :studentName="studentName" :studentAge="studentAge" :studentLanguage="studentLanguage" />
</template>

<style lang="scss" scoped>

</style> -->

<script setup>
import StudentComp from './StudentComp.vue';

// defineProps(['studentName','studentAge', 'studentLanguage'])
const props = defineProps(['studentName','studentAge', 'studentLanguage'])

</script>
<template>
    <StudentComp :studentName="props.studentName" :studentAge="props.studentAge" :studentLanguage="props.studentLanguage" />
</template>

<style lang="scss" scoped>

</style>