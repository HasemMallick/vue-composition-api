        <script setup>
            const msg = "this is a message"
            const num = 252
            const addNum = (x, y) => {
                return x + y
            }
        </script>
<template>
    <div>
        <h2>This is interpolated text: <i>{{ msg }}</i> </h2>
        <hr>
        <p>Number : {{ num }}</p>
        <hr>
        <h3>Call a method</h3>
        <h1>Add Number{{ addNum(2, 10) }}</h1>
    </div>
</template>


<style lang="scss" scoped>

</style>