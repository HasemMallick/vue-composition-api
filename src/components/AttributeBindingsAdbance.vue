<script setup>
    const img = "https://images.pexels.com/photos/25911569/pexels-photo-25911569/free-photo-of-foggy-view-of-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    const altText = "some image alternative text"
    const imageHeight = 500
    const imageWidth = 400
</script>
<template>
    <div>
        <img :src="img" :alt="altText" :height="imageHeight" :width="imageWidth" >
    </div>
</template>


<style lang="scss" scoped></style>