<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>
<script setup lang="ts">
import { IonHeader, IonTitle, IonToolbar } from "@ionic/vue";

defineProps({
  title: String
})
</script>