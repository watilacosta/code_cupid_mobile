<template>
  <ion-alert
    trigger="present-alert"
    header="Please select image"
    :buttons="alertButtons"
    :inputs="alertInputs"
    :clear-input="true"
  ></ion-alert>
</template>

<script lang="ts" setup>
  import { IonAlert } from '@ionic/vue';

  const alertButtons = ['Send'];
  const alertInputs = [
    {
      type: 'url',
      placeholder: 'Search Image'
    }
  ];
</script>
