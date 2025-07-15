<template>
  <div>
    <div v-if="timeLeft" class="countdown">
    <div>
        <div v-appear="{ name: 'slide-down', delay: 1900 }">
            {{ timeLeft.days }}
        </div>
        <div v-appear="{ name: 'zoom-in', delay: 2300 }">
            {{$t('countdownTimes.days')}}
        </div>
    </div>
    <div>
        <div v-appear="{ name: 'slide-down', delay: 2300 }">
            {{ timeLeft.hours }}
        </div>
        <div v-appear="{ name: 'zoom-in', delay: 2700 }">
            {{$t('countdownTimes.hours')}}
        </div>
    </div>
    <div>
        <div v-appear="{ name: 'slide-down', delay: 2700 }">
            {{ timeLeft.minutes }}
        </div>
        <div v-appear="{ name: 'zoom-in', delay: 3100 }">
           {{$t('countdownTimes.minutes')}}
        </div>
    </div>
    <div>
        <div v-appear="{ name: 'slide-down', delay: 3100 }">
            {{ timeLeft.seconds }}
        </div>
        <div v-appear="{ name: 'zoom-in', delay: 3400 }">
            {{$t('countdownTimes.seconds')}}
        </div>
    </div>
    </div>
    <div v-else>
      <p>It's the big day!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const targetDate = new Date('2025-08-17T00:00:00');

const timeLeft = ref(null);

const updateTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    timeLeft.value = null;
    return;
  }

  timeLeft.value = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

let interval;

onMounted(() => {
  updateTimeLeft();
  interval = setInterval(updateTimeLeft, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
div {
  text-align: center;
  display: flex;
  column-gap: 30px;
}
.countdown>div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.countdown>div>div:first-child{
    font-size: 60px;
    font-family: 'MontserratARM', Arial, sans-serif;
}
.countdown>div>div:nth-child(2){
    font-size: 20px;
}
.countdown>div:not(:last-child){
    border-right: 1px solid #f3ede6;
    padding-right: 20px;
}
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
p {
  font-size: 1.5em;
  margin: 0.2em;
}

@media screen and (min-width: 375px) and (max-width: 600px) {
    .countdown>div>div:first-child {
        font-size: 30px;
        font-family: 'MontserratARM', Arial, sans-serif;
    }
    .countdown>div>div:nth-child(2) {
    font-size: 17px;
}
}


.slide-down {
    opacity: 0;
    transform: translateY(-40px);
}

.animated {
    opacity: 1;
    transform: none;
    transition: all 0.9s ease-out;
}

.fade-in {
    opacity: 0;
    transform: translateY(20px); /* թեթև ներքև */
}

.slide-up {
    opacity: 0;
    transform: translateY(40px); /* ավելի շատ ներքև */
}

.zoom-in {
    opacity: 0;
    transform: scale(0.85); /* փոքր չափից դեպի մեծ */
}
</style>
