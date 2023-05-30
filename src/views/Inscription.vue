
<template>
    <p class="text-2xl font-semibold mb-8">Formulaire d'inscription</p>
<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Votre adresse E-mail
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="email" id="username" type="email" placeholder="Ex: Colin">
    </div>
    
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Mot de passe
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" v-model="password" id="password" type="password" placeholder="******************">
      <!--<p class="text-red text-xs italic">Please choose a password.</p>-->
    </div>
    
    <div class="flex items-center justify-between">
      
      <button class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" @click="register">
        Valider
      </button>
      <button class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" @click="SignInWithGoogle">
        Enregistrer avec google
      </button>
    </div>
</div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("enregistrement OK");
        router.push('/PageConnecter');
    })
    .catch((error)=> {
        console.log(error.code);
        alert(error.message);
    })
};

const SignInWithGoogle = () => {
 const provider = new GoogleAuthProvider();
 signInWithPopup(getAuth(), provider).then((result) =>{
    console.log(result.user);
    router.push("/PageConnecter");
 }).catch((error)=> {

 })
};
</script>
