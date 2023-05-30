

<template>

<div class="flex flex-col h-screen">
  
  <div v-if="isLoggedIn">
    <Navbar />
  </div>
     <div v-else="isLoggedIn">
    <NavSSConn/>
    </div>
    
      <div class="flex justify-center items-center flex-grow flex-col">
        <router-view />
      </div>
</div>  
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import NavSSConn from "./components/NavBarSSConn.vue";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../router";

const isLoggedIn = ref(false);

let auth = ref({} as any);

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user){
            isLoggedIn.value = true;
        }else{
            isLoggedIn.value = false;
        }
    })
});
</script>