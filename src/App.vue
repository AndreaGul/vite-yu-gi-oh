<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',

  components: {
    AppHeader,
    AppMain,
  }
};
</script>

<template>
  <div class="all-container">
    <AppHeader/>
    <AppMain/>
  </div>
  
</template>

<style scoped lang="scss">
@use './assets/scss/style.scss' as *;




</style>
