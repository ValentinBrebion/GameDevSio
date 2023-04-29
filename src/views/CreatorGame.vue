<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import CardCreator from '../components/CardCreator.vue'


const route = useRoute() 
const Creator = ref({} as any)

function fetchCreator() {
    fetch(`https://api.rawg.io/api/creators?key=0da5f74d36bd43b0bf7d58de72dd0640`)
        .then(response => response.json())
        .then(data => {
  
            Creator.value = data
         
            console.log(Creator)
        
            
         
        })
}

// Si l'ID change, on appelle la fonction fetchPokemon
watch(route, () => fetchCreator())

// Appel de la fonction fetchPokemon, pour récupérer les détails du pokémon
fetchCreator()

</script>

<template>
    <div class="grid grid-cols-4 gap-4 pt-20">
    <div v-for="(Gaming, index) in Creator.results" :key="Creator.results.id">
        
        <CardCreator :img="Gaming.image">
            <template #nom>{{ Gaming.name }}</template>
            <template #nbJeuxDev>{{ Gaming.games_count }}</template>
       
            
        </CardCreator>
    
</div>
</div>
</template>