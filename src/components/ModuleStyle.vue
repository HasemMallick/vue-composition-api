
<script setup>

</script>

<template>
    <div>
        <h2 :class="$style['module-style']" >Module style with kabab-case</h2>
    </div>

    <div>
        <h2 :class="$style.moduleStyleCamelCase">Module style with camelCase </h2>
    </div>

    <div>
        <h2 :class="myClass.moduleStyleWithModuelName" >Module Style with moduel name passed in the style tag</h2>
    </div>
</template>

<style module>
.module-style {
    color: aquamarine;
    background-color: black;
    font-size: 25px;
}

.moduleStyleCamelCase {
    color: aquamarine;
    background-color: gray;
    font-size: 25px;
}
</style>

<style module="myClass" >
.moduleStyleWithModuelName {
    color: red;
    background-color: rgb(141, 141, 141);
    font-size: 25px;
}
</style>