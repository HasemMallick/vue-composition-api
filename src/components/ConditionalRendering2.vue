
<script setup>
import { ref} from 'vue';

const paw = ref("sssword")
</script>

<template>
    <div>
        <h1 v-if="paw.length > 7" >Strong Password</h1>
        <h1 v-else-if="paw.length > 1 && paw.length < 8">Password is Weak</h1>
        <h1 v-else>Please provide a Password</h1>
    </div>
</template>
<style lang="scss" scoped>

</style>