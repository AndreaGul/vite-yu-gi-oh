<script>
import AppLogo from './AppLogo.vue';
import AppTitle from './AppTitle.vue';
export default {
  name: 'AppHeader',

  components: {
    AppLogo,
    AppTitle,
  }
  
};
</script>

<template>
    <AppTitle/>
    <AppLogo/>
</template>

<style scoped lang="scss"></style>
