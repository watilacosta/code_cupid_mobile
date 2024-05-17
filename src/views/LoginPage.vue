<template>
  <ion-page>
    <ion-content :fullscreen="true" class="bg-login">
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';

const authStore = useAuthStore()
const email = ref("")
const password = ref("")


</script>

<style scoped>
.bg-login {
	--ion-background-color: transparent;
  --ion-background-color-rgb: 160, 32, 240;

  background: linear-gradient(45deg, rgba(160, 32, 240, 1), rgba(188, 123, 228, 1));
}
</style>