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
  methods: {
        search() {
          axios.get(this.store.apiUrl + this.store.apiUrl + '?archetype=' + this.store.searchkey  ).then((response) => {
            this.store.cards= response.data.data;
          });

          axios.get(this.store.apiUlrActhetypes).then((response) => {
            this.store.cardArchtypes= response.data;
          });
        },
        
    },

  created(){
    this.search();
  },
  
};
</script>

<template>
  <main>
      <AppMainSelect @search=" search" />
      <AppMainCards :cardslist="this.store.cards"/>
    
  </main>
   
</template>

<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

  main {
    overflow: auto;
  }
    
    </style>
