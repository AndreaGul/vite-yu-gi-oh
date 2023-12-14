<script>

import { store } from '../store';

export default {
  name: 'AppMainSelect',

  data (){
    return{
      
      store,
    }
  },
  
  
};
</script>

<template>
  <div class="container">
      <select name="Archtypes" id="Archtypes" v-model="store.searchkey" @change="$emit ('search')">
        <option selected value="">Achetypes</option>
        <option v-for="arch in store.cardArchtypes" :value="arch.archetype_name">{{arch.archetype_name}}</option>
      </select>
  </div>
 
  
</template>

<style scoped lang="scss">

.container {
  padding: 24px 12px;

  select {
    padding: 12px 8px;
    width: 162px;
    border-radius: 6px;

   
  }
}

</style>
