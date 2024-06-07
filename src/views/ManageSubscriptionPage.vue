<template>
  <ion-page>
    <PageTitle title="Menage Subscription"/>

    <ion-content class="ion-padding" color="light">
      <ion-button
        @click="() => router.go(-1)"
        shape="round"
        fill="clear"
        color="medium"
      >
        <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
      </ion-button>
      <CurrentPlaneCard :subscription="subscription" />
      <PlansCard :plans="plans" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import router from "@/router";
import { arrowBack } from "ionicons/icons";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  onIonViewWillEnter,
} from "@ionic/vue";
import { useUserStore } from "@/store/user";
import { Subscription } from "@/models/Subscription";
import CurrentPlaneCard from "@/components/CurrentPlanCard.vue";
import PlansCard from "@/components/PlansCard.vue";
import PlanService from '@/services/PlanService'
import { Plan } from "@/models/Plan";
import { ref } from "vue";
import convertKeysToCamelCase from "@/utils/convertSnakeToCamel";

const store = useUserStore()
const subscription = ref({} as Subscription)
const currentUser = store.getCurrentUser
const service = PlanService
const plans = ref([] as Array<Plan>)

const parseDataSubscription = (() => {
  const subscriptionData = convertKeysToCamelCase(currentUser.subscription)

  subscription.value = {
    id: subscriptionData.id,
    startDate: subscriptionData.startDate,
    endDate: subscriptionData.endDate,
    planName: subscriptionData.planName,
  }
})

const listPlans = async () => {
  await service.list()
    .then((response) => {
      plans.value = response.data
    }).catch((error) => {
      console.log(error)
    })
}

onIonViewWillEnter(() => {
  parseDataSubscription()
  listPlans()
})
</script>

<style scoped>

</style>