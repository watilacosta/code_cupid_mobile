<template>
  <ion-card color="light">
    <ion-card-header>
      <ion-card-title>Plans</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-row class="ion-justify-content-center ion-align-items-center">
        <ion-button shape="round" size="large" class="btn-heart">
          <ion-icon slot="icon-only" :icon="heart"></ion-icon>
        </ion-button>
      </ion-row>
      <ion-row class="ion-justify-content-center ion-align-items-center ion-margin-vertical">
        <h2>Unlimited Likes</h2>
      </ion-row>
      <ion-row class="ion-justify-content-center ion-align-items-center">
        <h3>Send as many likes as you want</h3>
      </ion-row>

      <ion-row class="ion-margin-vertical ion-padding-vertical row-plans plans">
        <ion-col
          class="plan"
          v-for="plan in plans"
          :key="plan.name"
        >
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <h3 class="plan-name">{{ plan.duration_in_months }}</h3>
          </ion-row>
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <h3 class="plan-months">{{ plan.duration_in_months == 1 ? 'Month' : 'Months' }}</h3>
          </ion-row>
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <h3>$ {{ plan.price }}/mo</h3>
          </ion-row>
        </ion-col>
      </ion-row>

      <ion-button
        @click="updatePlan"
        expand="full"
        shape="round"
        size="large"
        mode="md"
        class="grad-btn"
      >
        Continue
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonRow,
  IonCol
} from "@ionic/vue";
import { heart } from "ionicons/icons";
import {Plan} from "@/models/Plan";
import {ref} from "vue";

defineProps({
  plans: {
    type: Array<any>,
    required: true
  }
})

const selectedPlan = ref({} as Plan)

const selectPlan = ((plan: Plan) => {
  selectedPlan.value = plan
})

const updatePlan = (() => {
  console.log(selectedPlan.value)
})
</script>

<style scoped>
ion-card {
  margin-top: 10%;
  border-radius: 15px;
}

ion-card-title {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
}

.btn-heart {
  width: 57px;
  height: 57px;
}
h2 {
  font-size: 21px;
  font-weight: bold;
}

h3 {
  font-size: 14px;
}

.plan-name {
  font-size: 29px;
  font-weight: bold;
}

.plan-months {
  font-weight: bold;
}

.row-plans {
  border: 1px solid #e0ac08;
}

.grad-btn {
  --background: linear-gradient(to bottom, #EEAF51 0%, #B67718  100%, #EEAF51  0%);
  --color: white;
}

.plans {
  background-color: #e3e3e3;
}

.plan {
  background-color: #e3e3e3;
}
</style>
