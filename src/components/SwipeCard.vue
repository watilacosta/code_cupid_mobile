<template>
  <ion-card ref="card" class="ion-no-margin">
    <slot></slot>
  </ion-card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { createGesture, GestureDetail } from '@ionic/vue';

const card = ref<HTMLElement | null>(null);
const startX = ref(0);
const currentX = ref(0);
const threshold = ref(100);

const props = defineProps({
  onSwipeEnd: {
    type: Function,
    required: true
  }
})

onMounted(() => {
  if (card.value) {
    const gesture = createGesture({
      el: card.value,
      gestureName: 'swipe',
      onStart,
      onMove,
      onEnd,
      threshold: 15,
    });
    gesture.enable();
  }
});

const onStart = (detail: GestureDetail) => {
  startX.value = detail.startX
}

const onMove = (detail: GestureDetail) => {
  currentX.value = detail.currentX - startX.value;

  if (card.value) {
    card.value.style.transform = `translateX(${currentX.value}px) rotate(${currentX.value / 10}deg)`;
  }
};

const onEnd = () => {
  if (card.value) {
    if (Math.abs(currentX.value) > threshold.value) {
      card.value.style.transition = 'transform 0.3s ease-out';
      card.value.style.transform = `translateX(${currentX.value > 0 ? 1000 : -1000}px) rotate(${currentX.value / 10}deg)`;

      setTimeout(() => {
        props.onSwipeEnd()
      }, 300);
    } else {
      card.value.style.transition = 'transform 0.3s ease-out';
      card.value.style.transform = 'translateX(0) rotate(0)';
    }

    setTimeout(() => {
      if (card.value) {
        card.value.style.transition = '';
      }
    }, 300);
  }
};
</script>

<style scoped>
ion-card {
  user-select: none;
  will-change: transform;
}
</style>
