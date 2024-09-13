<script setup>
import CombinedStyle from './components/CombinedStyle.vue';
import GlobalStyle from './components/GlobalStyle.vue';
import LocalStyle from './components/LocalStyle.vue';
import ModuleStyle from './components/ModuleStyle.vue';
</script>

<template>
  <GlobalStyle />
  <LocalStyle />
  <h3 class="comb-g-style">Combine Global and Local Style </h3>
  <CombinedStyle />
  <hr>
  <ModuleStyle />
</template>
