<template>
    <div v-if="!started" class="music-overlay">
        <div class="magic-button" @click="startMusic">
            <div class="heart-beat">💖</div>
            <div class="text">Սեղմիր ու ժպտա՝ հարսանիքն արդեն սկսվում է! 😊</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const started = ref(false)
let audio

onMounted(() => {
    audio = new Audio('/wedding-music.mp3')
    audio.loop = true
    audio.volume = 0.5
    audio.preload = 'auto'
    audio.setAttribute('playsinline', 'true')
})

const startMusic = () => {
    audio.play()
        .then(() => {
            started.value = true
        })
        .catch((e) => {
            console.warn('Չհաջողվեց նվագել:', e)
        })
}
</script>

<style scoped>
.music-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.music-overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("../assets/Say-Hem.jpg");
    background-size: cover;
    background-position: center;
    transform: scale(1); /* Սեղմում ենք նկարը */
    filter: brightness(0.2);
    z-index: -1;
    opacity: .8;
}

/* Zoom in + fade in */
@keyframes zoomFade {
    0% {
        opacity: 0;
        transform: scale(1);
    }
    100% {
        opacity: 1;
        transform: scale(1.05); /* Թեթև մեծացում */
    }
}

.magic-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 30px 40px;
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(255, 192, 203, 0.5);
    cursor: pointer;
    transition: transform 0.3s;
    animation: pulse 2.5s infinite ease-in-out;
    margin: 0 15px;
}

.magic-button:hover {
    transform: scale(1.05);
}

.heart-beat {
    font-size: 40px;
    animation: beat 1s infinite;
}

.text {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #a35d73;
    text-align: center;
}

@keyframes fadeIn {
    from { opacity: 0 }
    to { opacity: 1 }
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(255, 192, 203, 0.6); }
    70% { box-shadow: 0 0 0 20px rgba(255, 192, 203, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 192, 203, 0); }
}

@keyframes beat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}
@media only screen and (min-width: 375px) and (max-width: 600px) {
    .magic-button {
        padding: 15px 20px;
    }
}
</style>
