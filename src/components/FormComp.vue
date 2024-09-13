
<script setup>
import { ref, reactive } from 'vue';

// good but there is a better way 
// const userName = ref("")
// const userEmail = ref('')
// const userPassword = ref('')

// const submitHandler = () => {
//     console.log(userName.value, userEmail.value, userPassword.value)
// }

const formInfo = reactive({userName: '', userEmail: '', userPassword: ''})

const submitHandler = () => console.log(formInfo.userName, formInfo.userEmail, formInfo.userPassword)


</script>

<template>
    <div>
        <h2>V-Model </h2>
        <form @submit.prevent="submitHandler">
            <input type="text" placeholder="Your Email" v-model="formInfo.userName" >
            <input type="email" placeholder="example@gmail.com" v-model="formInfo.userEmail">
            <input type="password"  placeholder="********" v-model="formInfo.userPassword" >
            <button type="submit" >Submit</button>
        </form>
    </div>

    <div>
        {{ formInfo.userName }} == {{ formInfo.userEmail }} == {{ formInfo.userPassword }}
    </div>
</template>

<style lang="scss" scoped>

</style>
