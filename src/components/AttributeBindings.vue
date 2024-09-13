    <script setup>
        const myLinkedIn = "https://linkedin.com/in/hasemmallick"
    </script>
<template>
    <div>
        <!-- old syntax of attribute binding  -->
        <a v-bind:href="myLinkedIn">Hasem Mallick LinkedIN</a>
        
        <hr>

        <!-- new and shorthand of attribute bindings  -->
         <a  :href="myLinkedIn" target="_blank">Hasem Mallick LinkedIn</a>
    </div>
</template>


<style lang="scss" scoped>

</style>