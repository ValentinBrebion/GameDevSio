
<template>
    <p class="text-2xl font-semibold ">Formulaire de connexion</p>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Adresse Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="email" id="email" type="email" placeholder="Ex: Colin">
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Mot de passe
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" v-model="password" id="password" type="password" placeholder="******************">
      <p v-if="errMsg" class="text-red text-xs italic">{{  errMsg }}</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue hover:bg-blue-dark  font-bold py-2 px-2 rounded" type="button" @click="register">
        Connexion
      </button>
      <button class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" @click="SignInWithGoogle">
        Enregistrer avec google
      </button>
    </div>
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const errMsg = ref() // error message
const router = useRouter();

const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Connexion OK");
        router.push('/PageConnecter');
    })
    .catch((error)=> {
        console.log(error.code);
        switch (error.code){
            case "auth/invalid-email":
                errMsg.value = "Adresse Email Invalide";
                break;
            case "auth/user-not-found":
                errMsg.value = "pas de compte avec cet adresse-Email";
                break;
            case "auth/wrong-password":
                errMsg.value = "mot de passe incorrect";
                break;
            default:
                errMsg.value = "email ou mot de passe incorrect";
                break;
        }
    });
};

const SignInWithGoogle = () => {

};
</script>
