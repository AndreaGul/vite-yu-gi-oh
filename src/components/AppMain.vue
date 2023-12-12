<script>
import AppMainCards from './AppMainCards.vue';
import AppMainSelect from './AppMainSelect.vue';
export default {
  name: 'AppMain',

  components: {
    AppMainCards,
    AppMainSelect,
  }
  
};
</script>

<template>
    <AppMainCards/>
    <AppMainSelect/>
</template>

<style scoped lang="scss"></style>
