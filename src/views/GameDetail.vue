<script setup lang="ts">

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import GameDetail from '../components/DetailJeux.vue'


const route = useRoute() 
const Games = ref({} as any)

function fetchDetailGame() {
    fetch(`https://api.rawg.io/api/games/${route.params.id}?key=0da5f74d36bd43b0bf7d58de72dd0640`)
        .then(response => response.json())
        .then(data => {
  
          Games.value = data
         
            console.log(Games)
        
            
         
        })
}

// Si l'ID change, on appelle la fonction fetchPokemon
watch(route, () => fetchDetailGame())

// Appel de la fonction fetchPokemon, pour récupérer les détails du pokémon
fetchDetailGame()


</script>


<template>
 <GameDetail :img="Games.background_image">
 <template #titre>{{ Games.name }}</template>
 <template #description> {{ Games.description }}</template>
 
<template #genres v-for="(genres, index) in Games.genres" :key="Games.id">
{{ genres.name }}
</template>

<template #Developpeurs v-for="(developpeurs,index) in Games.developers">
{{ developpeurs.name }}
</template>

<template #Notation v-for="Note in Games.ratings" >
 
  {{ Note.title }} - {{ Note.count }} - {{ Note.percent }} %
</template>
    
   
  
   
 </GameDetail>
</template>
  

  


