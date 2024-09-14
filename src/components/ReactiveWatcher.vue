<script setup>
import { reactive, watch } from 'vue'

const userName = reactive({name: 'Hasem'})

// Here we can't provide specific property of object
// - we have to provide the entire object, otherwise it's gonna give us error in the console.
// watch(userName, (newVal, oldVal) => {
//     // If we're using "object" both the new & the old values will be the same
//   console.log('new value', newVal)
//   console.log('old value', oldVal)
// })


// Now if we want to get the "old" & the "new" values separately,
// - for that we'll have to pass a getter function.
// - & here we have to specify the actual object/state "property".
watch(
    () => userName.name, 
    (newVal, oldVal) =>  {
    console.log('new value', newVal)
    console.log('old value', oldVal)
})
</script>

<template>
   <h2>User Name: {{ userName.name }}</h2>
   <button type="submit" @click="userName.name = 'Mallick'" >Change Name</button>
</template>


<style lang="scss" scoped>

</style>