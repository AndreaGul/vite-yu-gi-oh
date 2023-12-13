<script>
import axios from 'axios';
import AppMainCards from './AppMainCards.vue';
import AppMainSelect from './AppMainSelect.vue';
export default {
  name: 'AppMain',

  data() {
    return{
      cards:[],
      apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0', 
    }
  },

  components: {
    AppMainCards,
    AppMainSelect,
  },

  created(){
    axios.get(this.apiUrl).then((response) => {
      this.cards= response.data.data;
    });
  },
  
};
</script>

<template>
  <main>
      <AppMainSelect />
      <AppMainCards :cardslist="this.cards"/>
    
  </main>
   
</template>

<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

  main {
    overflow: auto;
  }
    
    </style>
