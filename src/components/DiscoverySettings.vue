<template>
  <ion-grid class="ion-padding-horizontal ">
    <ion-row class="ion-justify-content-between ion-align-items-center">
      <ion-col size="12">
        <ion-text color="dark">
          <h3>Discovery Settings</h3>
        </ion-text>
      </ion-col>
    </ion-row>
  </ion-grid>

  <form class="ion-padding-horizontal">
    <ion-row>
      <ion-col>
        <ion-input
          fill="outline"
          label="Location"
          class="ion-margin-bottom"
          type="text"
          label-placement="floating"
          value="Brasil"
          :disabled="true"
        />
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-input
          fill="outline"
          label="Language"
          class="ion-margin-bottom"
          type="text"
          label-placement="floating"
          value="Português BR"
          :disabled="true"
        />
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-input
          fill="outline"
          label="Show Me"
          class="ion-margin-bottom"
          type="text"
          label-placement="floating"
          value="Women"
          :disabled="true"
        />
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-range
          @ionChange="onAgeRangeChange"
          :dual-knobs="true"
          :value="{ lower: minAgeRange, upper: maxAgeRange }"
          :min="18"
          :max="100"
          :pin="true"
          class="ion-margin-horizontal"
          aria-label="Age Range"
          label-placement="stacked"
          label="Age Range"
          mode="md"
        />
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-range
          @ionChange="onDistanceChange"
          :min="1"
          :max="200"
          :pin="true"
          aria-label="Max Distance"
          label-placement="stacked"
          label="Maximum distance (Km)"
          class="ion-margin-horizontal"
        />
      </ion-col>
    </ion-row>
  </form>
</template>
<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonRange,
  IonInput,
  IonText
} from '@ionic/vue'
import { ref } from "vue";

const minAgeRange = ref(18)
const maxAgeRange = ref(50)
const maxDistance = ref(200)

const onAgeRangeChange = ({ detail }: any) => {
  minAgeRange.value = detail.value.lower
  maxAgeRange.value = detail.value.upper
};

const onDistanceChange = ({ detail }: any) => {
  maxDistance.value = detail.value
}
</script>
<style scoped>
ion-text {
  margin-top: 3%;
}

ion-button {
  --border-color: #d1d1d1;
}

ion-range::part(pin) {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  transform: scale(1.01);

  top: -25px;
}
</style>