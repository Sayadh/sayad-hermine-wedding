<template>
    <div v-if="showBlock" class="wedding__invitation">
        <div class="wedding__invitation--info invitation__info">
            <div v-appear="{ name: 'slide-down', delay: 0 }" class="languageAction">
                <button class="language" @click="$i18n.locale = $i18n.locale === 'am' ? 'ru' : 'am'">{{$i18n.locale}} | {{$i18n.locale == 'am' ? 'ru':'am'}}</button>
            </div>
            <div v-appear="{ name: 'slide-down', delay: 0 }" class="invitation__info--header">
                <h1>{{ $t('title') }}</h1>
            </div>
            <div class="invitation__info--names" v-if="$i18n.locale === 'am'">
                <img src="https://static.tildacdn.one/tild3132-3965-4765-b164-643561323563/01.svg" class="circle" alt="">
                <i class="name__say">Սայադ</i>
                <i class="name__hem">Հերմինե</i>
            </div>
            <div class="invitation__info--names" v-else>
                <img src="https://static.tildacdn.one/tild3132-3965-4765-b164-643561323563/01.svg" class="circle" alt="">
                <i class="name__say">Саяд</i>
                <i class="name__hem">Гермине</i>
            </div>
            <div v-appear="{ name: 'slide-down', delay: 1300 }" class="invitation__info--countdown">
                <h1>{{$t('countdown')}}</h1>
                <CountDown />
                <a style="cursor: pointer" href="#wedding__main">
                    <img src="https://static.tildacdn.one/tild6432-6432-4261-b335-666136386561/Slaq.svg" alt="">
                </a>
            </div>
        </div>
        <MainInfo />
        <Footer v-appear="{ name: 'zoom-in', delay: 500 }"/>
    </div>
    <audio-autoplay @click="showBlock = true" />
</template>


<script setup>
import CountDown from './CountDown.vue'
import MainInfo from './MainInfo.vue'
import Footer from './Footer.vue'
import AudioAutoplay from "@/components/AudioAutoplay.vue";
import {ref} from "vue";

const showBlock = ref(false);
</script>


<style scoped lang="scss">
* {
    margin: 0 0;
}
.wedding__invitation {
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(./img/background.jpg);
    background-attachment: fixed;

    &--info {
        height: 670px;
        background: none;
        color: white;
    }
}

.invitation__info{
    padding-top: 40px;
    &--header{
        font-family: "MontserratARM", Arial, sans-serif;
        font-weight: 300;
        line-height: 37px;
        text-align: center;
        &h1{
            padding-left: 320px;
            width: 560px;
            zoom: 1.122;
        }
    }
    & .language{
        width: 78px;
        height: 23px;
        text-transform: uppercase;
        border-width: 1px;
        border-radius: 10px;
        background: none;
        background-position: center center;
        border-color: #f3ede6;
        border-style: solid;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out;
        color: #f3ede6;
        margin-bottom: 6px;
        margin-left: 120px;
    }
    &--names{
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        & .circle{
            width: 250px;
            zoom: 1.122;
            animation: namesAnimation 2.4s linear forwards;
            backface-visibility: hidden;
            transform: rotate(6deg);
            position: relative;

        }
        & .name__say {
            color: #a9957d;
            // left: 601px;
            top: 110px;
            font-size: 30px;
            width: 120px;
            zoom: 1.122;
            position: absolute;
            animation: nameanimation 1.6s linear forwards;
            backface-visibility: hidden;
        }
        & .name__hem {
            // left: 620px;
            color: #a9957d;
            margin-left: 50px;
            top: 160px;
            font-size: 30px;
            width: 120px;
            zoom: 1.122;
            position: absolute;
            animation: nameanimation 2s linear forwards;
            backface-visibility: hidden;
        }
    }
    &--countdown{
        display: flex;
        padding-top: 33px;
        flex-direction: column;
        align-items: center;
        row-gap: 15px;
        font-family: 'MontserratARM';
        font-weight: 300;

        & img{
            margin-top: 30px;
            animation: ArrowUpDown 2.6s infinite linear;
            backface-visibility: hidden;
            width: 42px;
            height: 21px;
            cursor: pointer;
        }
        & h1{
            font-size: 28px;
        }
        a {
            margin-top: -10px;
        }
    }
}



// animation: sbs-711855695-1681992064612 2.4s linear forwards;
//     backface-visibility: hidden;
//     transform: rotate(6deg);
@keyframes namesAnimation {
    0% {
        opacity: 0;
        transform: scale(1, 1);
        animation-timing-function: linear;
    }
    1% {
        opacity: 0;
        transform: scale(0.75, 0.75);
        animation-timing-function: linear;
    }
    59% {
        opacity: 0;
        transform: scale(0.75, 0.75);
        animation-timing-function: cubic-bezier(0.34,1.61,0.7,1);
    }
    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
}


@keyframes nameanimation {

    0% {
        opacity: 0;
        transform: scale(1, 1);
        animation-timing-function: linear;
    }
    1% {
        opacity: 0;
        transform: scale(0.75, 0.75);
        animation-timing-function: linear;
    }
    38% {
        opacity: 0;
        transform: scale(0.75, 0.75);
        animation-timing-function: cubic-bezier(0.34,1.61,0.7,1);
    }
    100% {
        opacity: 1;
        transform: scale(1, 1);
    }

}


@keyframes ArrowUpDown {
    0% {
        transform: translateY(0px);
        animation-timing-function: ease-in;
    }
    50% {
        transform: translateY(15px);
        animation-timing-function: ease-in;
    }
    100% {
        transform: translateY(0px);
    }
}


@media only screen and (min-width: 375px) and (max-width: 600px) {
    .invitation__info {
        &--header{

            padding-left: 0;
            padding-top: 0;
            & h1{
                padding-left: 0;
                width: auto;
            }
        }
        & .languageAction{
            text-align: center;
            & button{
                margin: 0 0 20px 0
            ;
            }
        }

    }
}
/*
<h1>{{ $t('title') }}</h1>
    <button @click="$i18n.locale = this.$i18n.locale === 'am' ? 'ru' : 'am'">{{$i18n.locale}} | {{$i18n.locale == 'am' ? 'ru':'am'}}</button>
 */

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
