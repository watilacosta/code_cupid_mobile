<template>
  <ion-page>
    <ion-alert
      :header="header"
      :message="message"
      :buttons="['Ok']"
      :is-open="isOpen"
      @didDismiss="setOpen(false)"
    ></ion-alert>

    <ion-content class="ion-padding">
      <ion-button 
        @click="() => router.go(-1)"
        shape="round"
        fill="clear"
        color="medium"
      >
        <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
      </ion-button>

      <ion-row>
        <ion-col>
          <h1 class="title">Register your account</h1>
          <h2 class="subtitle">Hello user, meet amazing people.</h2>
        </ion-col>
      </ion-row>

      <form @submit.prevent="submitForm">
        <ion-row>
          <ion-col>
            <ion-input
              v-model="email"
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
              v-model="selectedCountryCode"
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
                :key="countryCodes.dialingcode"
                :value="countryCodes.dialingcode">
                {{ countryCodes.country }} {{ countryCodes.dialingcode }}
              </ion-select-option>
            </ion-select>
          </ion-col>
          <ion-col>
            <ion-input
              v-model="phone_number"
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
              v-model="password"
              class="input-signup"
              :type="showPassword ? 'text' : 'password'"
              color="light"
              fill="outline"
              label-placement="stacked"
              placeholder="Password"
              error-text="Invalid password">
              <ion-icon slot="start" :icon="lockClosedOutline" aria-hidden="true"></ion-icon>
              <ion-button
                @click="togglePasswordVisibility"
                fill="clear"
                slot="end"
                aria-label="Show/hide"
              >
                <ion-icon
                  :icon="lockIcon ? eyeOffOutline : eyeOutline"
                  slot="icon-only"
                  aria-hidden="true"
                  color="medium">
                </ion-icon>
              </ion-button>
            </ion-input>
          </ion-col>
        </ion-row>

        <ion-row class="ion-margin-top"> 
          <ion-col class="ion-margin-top">
            <div class="ion-text-center">
              <ion-button
                @click="submitForm"
                class="signup-button"
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
      </form>

      <ion-row> 
        <ion-col>
          <div class="ion-text-center">
            <ion-button
              @click="() => router.go(-1)"
              fill="clear"
              color="medium"
              expand="full"
              shape="round"
              size="large"
              mode="md"
            >
              Login
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
  IonAlert,
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
  eyeOffOutline,
  eyeOutline,
  lockClosedOutline,
  mailOutline,
  phonePortraitOutline
} from 'ionicons/icons';
import { computed, ref } from 'vue';
import api from '@/utils/api'

const ionRouter = useIonRouter();
const selectedCountryCode = ref("")
const showPassword = ref(false)
const lockIcon = ref(true)
const email = ref("")
const phone_number = ref("")
const password = ref("")
const message = ref('')
const header = ref('')
const isOpen = ref(false)

interface Payload {
  user: {
    email: string,
    phone_number: string,
    password: string
  }
}

// LIFECYCLE METHODS
onIonViewWillEnter(() => {
  computedCountryCodes
  selectedCountryCode.value = computedCountryCodes.value[0].dialingcode

})

// COMPUTED METHODS
const computedCountryCodes = computed(() => {
  return getListCodes().codes
})

// OTHERS METHODS
useBackButton(10, () => {
  ionRouter.navigate('/login', 'forward', 'replace')
})

const setOpen = (state: boolean) => {
  isOpen.value = state;
};

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

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
  lockIcon.value = !lockIcon.value
}
 
const handleChange = (ev: any) => {
  selectedCountryCode.value = ev.detail.value
}

const submitForm = async () => {
  const payload: Payload = {
    user: {
      email: email.value,
      phone_number:  `${selectedCountryCode.value}${phone_number.value}`,
      password: password.value
    }
   }

  await signUp(payload)
}

const signUp = async (payload: Payload) => {
  await api.post('/auth/sign_up', payload)
    .then((response) => {
      message.value = response.data.message,
      header.value = 'Registration completed successfully'
      isOpen.value = true
      ionRouter.replace('/confirm-code')
    }).catch((error) => {
      message.value = error.response.data.error
      header.value = 'Error'
      isOpen.value = true
    }).finally(() => {
      computedCountryCodes
      selectedCountryCode.value = computedCountryCodes.value[0].dialingcode
    })
}
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
  color: #303030;
  font-size: 32px;
  margin-top: 5%;
  margin-bottom: 0;
}

.subtitle {
  color: #8E8E8E;
  font-size: 16px;
  margin-top: 2%;
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

.signup-button {
  margin-top: 50%;
  --ion-background-color: #a020f0;
}
</style>
@/utils/apibkp