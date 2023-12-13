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
  <main>
     <AppMainCards/>
    <AppMainSelect/>
  </main>
   
</template>

<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

  main {
    overflow: auto;
  }
    
    </style>
