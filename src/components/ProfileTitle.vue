<template>
  <ion-row class="ion-justify-content-center ion-align-items-center ion-margin-bottom">
    <h1 class="title">{{ title }}</h1>
  </ion-row>
</template>
<script setup lang="ts">
import { IonRow } from "@ionic/vue";

defineProps({
  title: String
})
</script>

<style scoped>
.title {
  font-size: 26px;
  margin-top: 10%;
}
</style>