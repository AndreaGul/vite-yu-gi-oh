<script>

import AppMainCardsCard from './AppMainCardsCard.vue';

export default {
  name: 'AppMainCards',

  components: {
    AppMainCardsCard,
  },

  props: ['cardslist'],
  
  
};
</script>

<template>
    <div class="container">
      <div class="found-container" ><h5>Found {{ this.cardslist.length }} cards</h5></div>
      <div>
        <ul class="cards-container">
          
          <AppMainCardsCard 
          v-for="card in cardslist"
          :img="card.card_images[0].image_url"
          :name="card.name"
          :race="card.race"
          />
        </ul>
      </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partial/variables' as *;

.container {
  background-color: white;
  padding: 50px;
  
  .found-container{
    padding: 24px 16px;
    background-color: $primary-bg-found-cards-color;
     h5 {
      color: white;
      font-size: 20px;
     }
  }

  :deep(.cards-container){
    display: flex;
    flex-wrap: wrap;
    gap: 15px 25px ;
    

    .card{
      width: calc((100% - (25px * 4)) / 5);
      background-color: $primary-main-bg-color;
      text-align: center;
      

      img{
        width: 100%;
        display: block;
      }

      .card-text-container {

        padding: 24px 20px 0 20px ;

        h4{
        color: #ffffff;
        text-transform: uppercase;
        margin-bottom: 28px;
      }

      }
      
    }
  }
}

</style>
