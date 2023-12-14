<script>
import axios from 'axios';
import AppMainCards from './AppMainCards.vue';
import AppMainSelect from './AppMainSelect.vue';
import { store } from '../store';
export default {
  name: 'AppMain',

  data() {
    return{
      store,
     }
  },

  components: {
    AppMainCards,
    AppMainSelect,
  },

  created(){
    axios.get(this.store.apiUrl).then((response) => {
      this.store.cards= response.data.data;
    });
  },
  
};
</script>

<template>
  <main>
      <AppMainSelect />
      <AppMainCards :cardslist="this.store.cards"/>
    
  </main>
   
</template>

<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

  main {
    overflow: auto;
  }
    
    </style>
