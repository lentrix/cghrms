<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <form class="login-form" @submit.prevent="onLogin()">
            <ion-item>
                <ion-label position="stacked">Username</ion-label>
                <ion-input type="text" v-model="email" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="stacked">Password</ion-label>
                <ion-input type="password" v-model="password" required></ion-input>
            </ion-item>
            <ion-button expand="block" type="submit" class="login-btn">Login</ion-button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { 
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, 
    IonLabel, IonInput, IonItem, IonButton 
} from '@ionic/vue';

import axios from 'axios';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';

import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
      
const router = useRouter();

const email = ref('');
const password = ref('');
const loading = ref(false);

const toast = useToast();

const appStore = useUserStore();

const onLogin = async () => {
  loading.value = true;
  try {
    const response = await axios.post('http://localhost:8000/api/login', {
      email: email.value,
      password: password.value
    });

    if(response.data.message=="Login successful") {
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('access_token', response.data.access_token)

      router.replace('/home');
    }
    
  }catch(error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message)
  }finally {
      loading.value = false;
  }
}

onMounted(() => {
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : '';
  if(user) {
    router.replace('/home');
  }
}); 
    
</script>

<style scoped>
    #container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
    }

    .login-form {
        width: 100%;
        max-width: 350px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
</style>