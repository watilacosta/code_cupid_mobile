<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Profile</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-button color="primary" @click="logout">
          Log out
        </ion-button>
        <ExploreContainer name="Profile page" />
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useAuthStore } from '@/store/auth';
import router from '@/router';

const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
  router.push('/login')

  console.log(`Token: ${authStore.authToken}, Autenticado: ${authStore.isAuthenticated}`)
}
</script>
  