<script setup>

//  Dynamic attribute bindings 
//  the key shuld be same as the attribute name
const imageAttr = {
     src: "https://images.pexels.com/photos/25911569/pexels-photo-25911569/free-photo-of-foggy-view-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

     alt: "some image alternative text",
     width: 500,
     height: 400,
}
</script>
<template>
    <div>
        <img :imageAttr >
    </div>
</template>


<style lang="scss" scoped>

</style>