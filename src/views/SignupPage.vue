<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button 
        @click="() => router.go(-1)"
        shape="round"
        fill="clear"
      >
        <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
      </ion-button>

      <ion-row>
        <ion-col>
          <h1 class="title">Sign Up</h1>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          <ion-input
            class="input-signup"
            color="light"
            fill="outline"
            label-placement="stacked"
            placeholder="Email"
            error-text="Invalid email"
          >
            <ion-icon slot="start" :icon="mailOutline" aria-hidden="true"></ion-icon>
          </ion-input>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size="4">
          <ion-select
            class="input-signup"
            color="light"
            placeholder="Country Code"
            aria-label="Country code"
            value="+55"
            fill="outline"
            label="Country Code"
          >
            <ion-select-option value="+55">+55</ion-select-option>
            <ion-select-option value="+01">+01</ion-select-option>
            <ion-select-option value="+608">+608</ion-select-option>
          </ion-select>
        </ion-col>
        <ion-col size="8">
          <ion-input
            class="input-signup"
            color="light"
            fill="outline"
            type="tel"
            label-placement="stacked"
            placeholder="Phone"
            error-text="Invalid Phone">
            <ion-icon slot="start" :icon="phonePortraitOutline" aria-hidden="true"></ion-icon>
          </ion-input>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          <ion-input
            class="input-signup"
            type="password"
            color="light"
            fill="outline"
            label-placement="stacked"
            placeholder="Password"
            error-text="Invalid password">
            <ion-icon slot="start" :icon="lockClosedOutline" aria-hidden="true"></ion-icon>
          </ion-input>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col>
          <ion-input
            class="input-signup"
            type="password"
            color="light"
            fill="outline"
            label-placement="stacked"
            placeholder="Confirm Password"
            error-text="Invalid password_confirmation">
            <ion-icon slot="start" :icon="lockClosedOutline" aria-hidden="true"></ion-icon>
          </ion-input>
        </ion-col>
      </ion-row>

      <ion-row class="ion-margin-top"> 
        <ion-col class="ion-margin-top">
          <div class="ion-text-center">
            <ion-button
              fill="solid"
              color="primary"
              expand="full"
              shape="round"
              size="large"
              mode="md"
            >
              Sign-up
            </ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import router from '@/router';
import {
  IonPage,
  IonContent,
  useBackButton,
  useIonRouter,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/vue';
import {
  arrowBack,
  lockClosedOutline,
  mailOutline,
  phonePortraitOutline
} from 'ionicons/icons';

const ionRouter = useIonRouter();

useBackButton(10, () => {
  ionRouter.navigate('/login', 'forward', 'replace')
})
</script>

<style scoped>
ion-content {
  --ion-background-color: #fff
}

ion-input.input-signup {
  --color: #8E8E8E;
  --placeholder-color: #8E8E8E;

  --padding-end: 10px;
  --padding-start: 10px;
}

.title {
  color: #000;
  margin-bottom: 15%;
}
</style>
