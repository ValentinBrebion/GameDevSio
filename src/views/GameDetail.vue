<script setup lang="ts">

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import GameDetail from '../components/DetailJeux.vue'


const route = useRoute() 
const Games = ref([] as any[])

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
   
            
 <GameDetail>
  <div v-for="(Gaming, index) in Games">
  <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ Gaming.slug }}</p>
</div> 
 </GameDetail>
                    

  

                    
                    
                

            
        
        

  
</template>

