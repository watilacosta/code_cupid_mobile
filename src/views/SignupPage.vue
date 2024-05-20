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
            justify="space-between"
            color="light"
            aria-label="Country code"
            fill="outline"
            interface="popover"
            @ion-change="handleChange($event)"
            :value="selectedCountryCode"
          >
            <ion-select-option
              v-for="countryCodes in computedCountryCodes"
              :value="countryCodes.dialingcode">
              {{ countryCodes.country }} {{ countryCodes.dialingcode }}
            </ion-select-option>
          </ion-select>
        </ion-col>
        <ion-col>
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
  IonSelectOption,
  onIonViewWillEnter,
} from '@ionic/vue';
import {
  arrowBack,
  lockClosedOutline,
  mailOutline,
  phonePortraitOutline
} from 'ionicons/icons';
import { computed, ref } from 'vue';

const ionRouter = useIonRouter();
const selectedCountryCode = ref("")

// LIFECICLE METHODS
onIonViewWillEnter(() => {
  computedCountryCodes
  selectedCountryCode.value = computedCountryCodes.value[0].dialingcode
})

useBackButton(10, () => {
  ionRouter.navigate('/login', 'forward', 'replace')
})

const getListCodes = () => {
  return {
    codes: [
      { country: 'US', dialingcode: '+1' },
      { country: 'GB', dialingcode: '+44' },
      { country: 'BR', dialingcode: '+55' },
      { country: 'IN', dialingcode: '+91' },
      { country: 'JP', dialingcode: '+81' },
      { country: 'DE', dialingcode: '+49' },
      { country: 'FR', dialingcode: '+33' },
      { country: 'CN', dialingcode: '+86' },
      { country: 'IT', dialingcode: '+39' },
      { country: 'RU', dialingcode: '+7' },
      { country: 'AU', dialingcode: '+61' },
      { country: 'ES', dialingcode: '+34' },
      { country: 'ZA', dialingcode: '+27' },
      { country: 'NZ', dialingcode: '+64' },
      { country: 'KR', dialingcode: '+82' },
      { country: 'MX', dialingcode: '+52' },
      { country: 'AR', dialingcode: '+54' },
      { country: 'ID', dialingcode: '+62' },
      { country: 'NO', dialingcode: '+47' },
      { country: 'SE', dialingcode: '+46' },
      { country: 'NL', dialingcode: '+31' },
      { country: 'CH', dialingcode: '+41' },
      { country: 'BE', dialingcode: '+32' },
      { country: 'GR', dialingcode: '+30' },
      { country: 'DK', dialingcode: '+45' },
      { country: 'TR', dialingcode: '+90' },
      { country: 'NG', dialingcode: '+234' },
      { country: 'EG', dialingcode: '+20' },
      { country: 'TH', dialingcode: '+66' },
      { country: 'SG', dialingcode: '+65' }
    ]
  }
}

const handleChange = (ev: any) => {
  selectedCountryCode.value = ev.detail.value
}

const computedCountryCodes = computed(() => {
  return getListCodes().codes
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

ion-select-option {
  color: #8E8E8E;
  --ion-background-color: #fff
}

ion-select {
  color: #8E8E8E;
  --ion-background-color: #fff
}
</style>
