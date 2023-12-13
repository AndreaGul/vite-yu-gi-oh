<script>
import axios from 'axios';
export default {
  name: 'AppMainCards',

  data() {
    return{
      cards:[],
      apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0', 
    }
  },
  created(){
    axios.get(this.apiUrl).then((response) => {
      this.cards= response.data.data;
    });
  },
  
};
</script>

<template>
    <div class="container">
      <div class="found-container" ><h5>Found {{ this.cards.length }} cards</h5></div>
      <div>
        <ul class="cards-container">
          <li v-for="card in cards"  class="card">
            <div><img :src="card.card_images[0].image_url" :alt="card.name"></div>
            <div class="card-text-container">
              <h4>{{ card.name }}</h4>
              <p>{{ card.race}}</p>
            </div>
            
          </li>
          
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

  .cards-container{
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
