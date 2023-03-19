<script setup lang="ts">

import { ref } from 'vue'
import Card from "../components/Card.vue";

const Games = ref([])
function GetListePopuAnime() {
  fetch('https://api.rawg.io/api/games?key=0da5f74d36bd43b0bf7d58de72dd0640&page_size=20')
    .then(response => response.json())
    .then(data => {
        Games.value = data.results
      console.log(Games)
    })
}

GetListePopuAnime()
</script>

<template>
   <div>
        <div class="grid grid-cols-4 gap-4 pt-20">
            <div v-for="(Gaming, index) in Games" :key="Gaming.id">
                <Card>
                    <img class="w-60 h-32 mx-auto" :src="Gaming.background_image">
                   
                    <div class="text-center">{{ Gaming.slug }}</div>
                   
                </Card>
            </div>
        </div>
    </div>
</template>