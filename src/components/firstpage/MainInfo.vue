<template>
    <div id="wedding__main" class="wedding__main">
        <div>
            <div v-appear="{ name: 'zoom-in', delay: 300 }" class="wedding__main--entry">
                <p>{{$t('invitationText')}}</p>
            </div>
            <div v-appear="{ name: 'zoom-in', delay: 800 }" class="wedding__main--date">
                <i>17 / 08 / 2025</i>
            </div>
            <img  v-appear="{ name: 'zoom-in', delay: 300 }" src="@/assets/photo_2025-07-15 18.16.19.jpeg" class="photo" alt="">
            <church/>
        </div>
        <div  class="wedding__main--party party">
            <img v-appear="{ name: 'zoom-in', delay: 500 }" src="https://optim.tildacdn.one/tild3038-3065-4637-b133-336233373764/-/cover/600x600/center/center/-/format/webp/handisutyun2.png" alt="axnax">
            <div class="party__info">
                <b v-appear="{ name: 'zoom-in', delay: 800 }" class="party__info--title">
                    {{$t('weddingParty.title')}}
                </b>
                <div v-appear="{ name: 'zoom-in', delay: 1000 }" class="party__info--time">
                    {{$t('weddingParty.time')}}
                </div>
                <div v-appear="{ name: 'zoom-in', delay: 1200 }" class="party__info--place">
                    {{$t('weddingParty.place')}}
                </div>
                <div v-appear="{ name: 'zoom-in', delay: 1400 }" class="party__info--city">
                    {{$t('weddingParty.city')}}
                </div>
                <img v-appear="{ name: 'zoom-in', delay: 1600 }" src="./img/Ginac.jpg" >

                <div class="party__info--action">
                    <a style="cursor: pointer" target="_blank" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4040250cb4f6c25d:0x60f98dfd7dc435ee?entry=s&sa=X&ved=1t:8290&hl=en-GB&ictx=111" ><button v-if="showPartyButton" :class="{ visible: showPartyButton }" class="ceremony--action">{{$t('weddingParty.buttonText')}}</button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Church from "@/components/firstpage/church.vue";


const showCeremonyButton = ref(false);
const ceremonyButtonAlreadyVisible = ref(false);

const ceremonyButtonScroll = () => {
    const mainInfo = document.getElementsByClassName('wedding__main--party')[0];
    const rect = mainInfo.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the bottom of the element is in view
    if (rect.bottom <= windowHeight) {
        showCeremonyButton.value = true;
        ceremonyButtonAlreadyVisible.value = true;
    } else if (ceremonyButtonAlreadyVisible.value) {
        showCeremonyButton.value = true;
    } else {
        showCeremonyButton.value = false;
    }
};

const showPartyButton = ref(false);
const partyButtonAlreadyVisible = ref(false);

const partyButtonScroll = () => {
    const mainInfo = document.getElementsByClassName('party__info')[0];
    const rect = mainInfo.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the bottom of the element is in view
    if (rect.bottom <= windowHeight) {
        showPartyButton.value = true;
        partyButtonAlreadyVisible.value = true;
    } else if (ceremonyButtonAlreadyVisible.value) {
        showPartyButton.value = true;
    } else {
        showPartyButton.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', ceremonyButtonScroll);
    window.addEventListener('scroll', partyButtonScroll);
    ceremonyButtonScroll(); // Check initial scroll position
    partyButtonScroll()
});

onUnmounted(() => {
    window.removeEventListener('scroll', ceremonyButtonScroll);
    window.removeEventListener('scroll', partyButtonScroll);
});
</script>

<style scoped lang="scss">
.wedding__main{
    color: white;
    &--entry{
        color: #a9957d;
        text-align: center;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        & p{
            font-size: 27px;
            width: 700px;
        }
    }
    &--date{
        display: flex;
        justify-content: center;
        padding-top: 60px;
        & img{
            width: 760px;
            height: 120px;
            // height: 90px;
        }
    }
    &--ceremony{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-content: center;
        align-items: center;
        text-align: center;

        & img {
            width: 400px;
        }

        & .ceremony__info{
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            row-gap: 14px;

            &--title{
                width: 320px;
                font-size: 25px;
                color: #a9957d;
                font-weight: 300;
                font-family: 'MontserratARM';
                text-transform: uppercase;
            }
            &--time{
                font-size: 35px;
                color: #a9957d;
                font-weight: 700;
                font-family: 'MontserratARM';
            }
            &--church{
                font-size: 35px;
                color: #a9957d;
                font-weight: 700;
                font-family: 'MontserratARM';
            }
            &--city{
                font-size: 20px;
                color: rgb(243, 237, 230);
                font-family: 'MontserratARM';
            }
        }
    }
    &--party{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-content: center;
        align-items: center;
        text-align: center;
        margin-top: 40px;

        & img{
            width: 400px;
        }

        & .party__info{
            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;
            row-gap: 14px;

            &--title{
                width: 320px;
                font-size: 25px;
                color: #a9957d;
                font-weight: 300;
                font-family: 'MontserratARM';
                text-transform: uppercase;
            }

            &--time{
                font-size: 35px;
                font-weight: 700;
                font-family: 'MontserratARM';
            }

            &--place{
                font-size: 35px;
                color: #a9957d;
                font-weight: 700;
                font-family: 'MontserratARM';
            }

            &--city{
                font-size: 20px;
                color: rgb(243, 237, 230);
                font-family: 'MontserratARM';
            }
        }
    }
}
.ceremony--action {
    opacity: 0;
    animation: fadeIn 2s forwards, fadeOut 0.5s forwards;
    animation-play-state: paused;
    color: white;
    border: 3px solid #f3ede6;
    background: none;
    border-radius: 50px;
    padding: 0 30px;
    font-size: 20px;
    height: 45px;
    margin-top: 20px;
}

.visible {
    animation-play-state: running;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
.wedding__main--date {
    i {
        margin: 0;
        padding-top: 0;
        font-size: 65px;
    }
}
@media screen and (min-width: 375px) and (max-width: 600px) {
    .wedding__main {
        margin-top: -25px;
    }
    .wedding__main--date{
        padding-top: 20px;
        i {
            font-size: 45px;
        }
    }

    .wedding__main--entry {
        p {
            font-size: 28px !important;
        }
    }

    .party__info--place {
        font-size: 20px !important;
    }

    .wedding__main--party img {
        width: 300px;
    }

    .party__info {
        img {
            width: 300px;
        }
    }

    .wedding__main{
        color: white;

        &--entry{
            text-align: center;
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;

            & p{
                font-size: 27px;
                width: auto;
            }
        }
    }
}


.slide-down {
    opacity: 0;
    transform: translateY(-40px);
}

.animated {
    opacity: 1;
    transform: none;
    transition: all 1.5s ease-out;
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


.photo {
    display: flex;
    height: 550px;
    margin: 0 auto;
    padding: 20px 0;
}

</style>
