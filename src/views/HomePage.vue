<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <h1>Home Page</h1>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import router from '@/router';
import { 
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, 
    IonLabel, IonInput, IonItem, IonButton 
} from '@ionic/vue';
import { onMounted, ref } from 'vue';

const user = ref({});

onMounted(() => {
    user.value = JSON.parse(localStorage.getItem('user') || '');

    if(!user.value) {
        router.replace('/Auth/Login');
    }
});

</script>