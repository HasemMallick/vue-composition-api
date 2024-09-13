
<script setup>
import { ref, reactive } from 'vue'

// const userName = ref('')
// const userEmail = ref('')
// const userPassword = ref('')

const formData = reactive({
    userName: '',
    userEmail: '',
    userPassword: ''
})


</script>

<template>
    <div>
        <h2>Form Component Handler </h2>
        
        <!-- /*first argument is method name the method EXACT same name will be used in parent component*/ -->
        <form @submit.prevent="$emit('userInfo', formData.userName, formData.userEmail, formData.userPassword)" >
            <input v-model="formData.userName" type="text" placeholder="User Name">
            <input v-model="formData.userEmail" type="email" placeholder="email">
            <input v-model="formData.userPassword" type="password" placeholder="password">
            <button type="submit">Submit</button>
        </form>

        <div>
            {{ formData.userName }}
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>
