<template>
  <div class="card" ref="card">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { createGesture, GestureDetail } from '@ionic/vue';

const card = ref<HTMLElement | null>(null);
const startX = ref(0);
const currentX = ref(0);
const threshold = ref(100);
const minValueToLike = ref(155);
const minValueToDislike = ref(-155);

const emit = defineEmits(['swipeEnd']);

const onStart = (detail: GestureDetail) => {
  startX.value = detail.startX;
}

const onMove = (detail: GestureDetail) => {
  currentX.value = detail.currentX - startX.value;

  if (currentX.value > minValueToLike.value) {
    console.log("Show Like Icon")
  }

  if (currentX.value < minValueToDislike.value) {
    console.log("Show Dislike Icon")
  }

  if (card.value) {
    card.value.style.transform = `translateX(${currentX.value}px)
                                  rotate(${currentX.value / 10}deg)`;
  }
};

const onEnd = () => {
  if (card.value) {
    if (Math.abs(currentX.value) > threshold.value) {
      card.value.style.transition = 'transform 0.3s ease-out';
      card.value.style.transform = `translateX(
        ${currentX.value > 0 ? 1000 : -1000}px) rotate(
        ${currentX.value / 10}deg)`;

      currentX.value > 0 ? likeUser() : dislikeUser()

      setTimeout(() => {
        emit('swipeEnd')
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

const likeUser = (() => {
  console.log("Like")
})

const dislikeUser = (() => {
  console.log("Dislike")
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
</script>

<style scoped>
.card {
  min-height: 100%;
  margin: 0;
  padding: 0;
}
</style>
