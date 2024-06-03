<template>
  <ion-page>
    <PageTitle title="Menage Subscription" />

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
      <PlansCard />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";
import router from "@/router";
import { arrowBack } from "ionicons/icons";
import {
  IonButton,
  IonIcon,
  IonContent,
  IonPage,
  onIonViewWillEnter,
} from "@ionic/vue";
import { ref } from "vue";
import api from "@/utils/api";
import { useUserStore } from "@/store/user";
import { Subscription } from "@/models/Subscription";
import CurrentPlaneCard from "@/components/CurrentPlanCard.vue";
import PlansCard from "@/components/PlansCard.vue";

const store = useUserStore()
const subscription = ref({} as Subscription)
const currentUser = store.getCurrentUser

interface RequestPayload {
  subscription: {
    user_id: number
  }
}

const parseDataToSubscription = ((data: any) => {
  subscription.value = {
    id: data.subscription.id,
    startDate: data.subscription.start_date,
    endDate: data.subscription.end_date,
    planName: data.subscription.plan_name,
  }
})

const showCurrentSubscription = async () => {
  const payload: RequestPayload = {
    subscription: {
      user_id: currentUser.id
    }
  }

  await api.get('/subscriptions/active', { params: payload })
    .then((response) => {
      parseDataToSubscription(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
}

onIonViewWillEnter(() => {
  showCurrentSubscription()
})
</script>

<style scoped>

</style>