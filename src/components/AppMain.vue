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
        onChange(event) {
            console.log(event.target.value)
           
        },
         chiamata() {
          console.log('ee')
         }
    },

  created(){
    axios.get(this.store.apiUrl).then((response) => {
      this.store.cards= response.data.data;
    });

    axios.get(this.store.apiUlrActhetypes).then((response) => {
      this.store.cardArchtypes= response.data;
    });
  },
  
};
</script>

<template>
  <main>
      <AppMainSelect @search="chiamata" />
      <AppMainCards :cardslist="this.store.cards"/>
    
  </main>
   
</template>

<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

  main {
    overflow: auto;
  }
    
    </style>
