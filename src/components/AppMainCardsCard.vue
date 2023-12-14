<script>

export default {
    name: 'AppMAinCardsCard',

    props: ['img','name','race']
}
</script>

<template>

        <li   class="card">
            <div>
                <img :src="img" :alt="name">
            </div>
            <div class="card-text-container">
              <h4>{{ name }}</h4>
              <p>{{ race }}</p>
            </div>
            
        </li>
</template>