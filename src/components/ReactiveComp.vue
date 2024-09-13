
<script setup>
import { reactive, ref} from 'vue';

// primitive data type not supported by reactive() 
const num = reactive(0)

const count = ref(0)

const reactiveCount = reactive({
    count: 100
})

const initialSate = reactive({
    val: 0,
    user: ["Hasem", "Mallick"]
})

const changeUser = () => {
    initialSate.user[0] = "Changed User"
}

const addUser = () => {
    initialSate.user.push("New User added")
}
</script>

<template>
    <div>
        <h2>Number: {{ num }}</h2>
        <button type="button" @click="num++" >+</button>
    </div>

    <hr>

    <div>
        <h2>Counter: {{ count }}</h2>
        <button @click="count++">+</button>
    </div>

    <hr>

    <div>
        <h1>Reactive Counter : {{ reactiveCount.count }}</h1>
        <button type="button" @click="reactiveCount.count += 100">+</button>
    </div>


    <hr>

    <div>
        <h1>Advance Reactive Counter: {{ initialSate.val }}</h1>
        <h1>Reactive Users: {{ initialSate.user }}</h1>

        <button type="button" @click="initialSate.val += 1000" >+</button>

        <button type="button" @click="changeUser" >Change User</button>
        <button type="button" @click="addUser" >Add User</button>
        <button type="button" @click="initialSate.val -= 1000" >-</button>
    </div>
</template>
<style lang="scss" scoped>

</style>