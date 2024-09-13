
<script setup>

</script>

<template>
    <div>
        <h3 class="comb-g-style">Combine Global and Local Style </h3>

        <hr>
        <div>
        <h2 class="g-style">Global Styling in the combine style component</h2>

            <h2 class="comb-loc-style">Local style of the combine style component</h2>
    </div>
    </div>  
</template>

<!-- global style  -->
<style>
.comb-g-style {
    color: aquamarine;
    font-size: larger;
}
</style>

<style scoped>
.comb-loc-style {
    color: azure;
    background-color: violet;
    font-size: 36px;
}
</style>