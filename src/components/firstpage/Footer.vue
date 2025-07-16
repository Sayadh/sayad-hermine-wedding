<template>
    <div style="padding-bottom: 50px">
        <div class="photos">
            <img  v-appear="{ name: 'zoom-in', delay: 300 }" src="@/assets/photo_2025-07-15 18.16.16.jpeg" class="photo" alt="">
            <img  v-appear="{ name: 'zoom-in', delay: 800 }" src="@/assets/photo_2025-07-15 18.16.18.jpeg" class="photo" alt="">
            <img  v-appear="{ name: 'zoom-in', delay: 800 }" src="@/assets/photo_2025-07-15 18.16.14.jpeg" class="photo" alt="">
            <img  v-appear="{ name: 'zoom-in', delay: 1300 }" src="@/assets/photo_2025-07-15 18.16.20.jpeg" class="photo" alt="">

        </div>
        <div v-appear="{ name: 'zoom-in', delay: 300 }">
            <img  v-appear="{ name: 'zoom-in', delay: 300 }" src="https://optim.tildacdn.one/tild6136-3063-4932-b765-353738623430/-/resize/120x/-/format/webp/Hearts.png" alt="">
            <h1>{{$t('message')}}</h1>
        </div>
        <div style="display: flex; flex-direction: row; margin-top: 20px">
            <i v-appear="{ name: 'slide-down', delay: 900 }" style="margin-top: -45px; font-size: 20px">Սայադ</i>
            <div v-appear="{ name: 'zoom-in', delay: 600 }" style="margin: 0">
                <img style="height: 80px; width: 80px" src="@/assets/heartMy.png" alt="">
            </div>
            <i v-appear="{ name: 'slide-up', delay: 1200 }" style=" margin-top: 35px; font-size: 20px">Հերմինե</i>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
img{
    width: 120px;
    height: 110px;
}
div {
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    align-items: center;
    color: white;
}
@media only screen and (min-width: 375px) and (max-width: 600px) {
    img {
        width: 60px;
        height: 55px;
    }
    div {
        margin-top: 50px;
    }
    h1 {
        font-size: 25px;
    }
}


.animated {
    opacity: 1;
    transform: none;
    transition: all 2s ease-out;
}

.fade-in {
    opacity: 0;
    transform: translateX(20px); /* թեթև ներքև */
}

.slide-up {
    opacity: 0;
    transform: translateX(40px); /* ավելի շատ ներքև */
}

.zoom-in {
    opacity: 0;
    transform: scale(0.85); /* փոքր չափից դեպի մեծ */
}
.slide-down {
    opacity: 0;
    transform: translateX(-40px);
}

.photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.photo {
    width: 100%;
    height: 250px;
    display: flex;
    margin: 0 auto;
}
</style>
