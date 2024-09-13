<script setup>
const submitForm = (e) => {
    e.preventDefault()
    alert("valid card")
}
</script>

<template>
   
        <form @submit="submitForm">
            <input type="text" placeholder="username">
            <input type="email" placeholder="yourEmail@gmail.com">
            <button type="submit">Submit</button>
        </form>
   
</template>
<style lang="scss" scoped>

</style>