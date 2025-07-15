<template>
    <div>
        <img src="https://optim.tildacdn.one/tild6136-3063-4932-b765-353738623430/-/resize/120x/-/format/webp/Hearts.png" alt="">
        <h1>{{$t('message')}}</h1>
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
</style>
