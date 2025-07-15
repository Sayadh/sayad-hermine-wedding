<template>
  <div class="church">
      <i class="churchWedding">{{ $t('churchWedding') }}</i>
      <b style="font-size: 40px; color: white">15:30</b>
      <i class="saintMaryMother">{{ $t('saintMaryMother') }}</i>
    <div>
        <img src="./img/church.jpg" >
    </div>
      <div class="party__info--action">
          <a target="_blank" style="cursor: pointer" href="https://www.google.com/maps/place/Saint+Astvatsatsin+Church/@40.4612499,44.6500678,17z/data=!3m1!4b1!4m6!3m5!1s0x4040252562ba6525:0x11ef855446f2be16!8m2!3d40.4612499!4d44.6500678!16s%2Fg%2F11jydzg9rq?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D" ><button class="ceremony--action">{{$t('weddingParty.buttonText')}}</button></a>
      </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.church{
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    color: #a9957d;

    img {
        height: 500px;
    }

    p {
        margin: 0;
    }
}

.ceremony--action {
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
.churchWedding {
    font-size: 60px
}
.saintMaryMother {
    font-size:20px
}
@media only screen and (min-width: 375px) and (max-width: 600px) {
    .church {
        margin-top: 35px;
        img {
            width: 300px;
            height: 350px;
        }
    }
    .churchWedding {
        font-size: 30px;
    }
    .saintMaryMother {
        font-size: 16px;
    }
    .dresscode__text {
        width: 300px;
        height: 180px;
        background: rgba(255, 255, 255, 0.3);
        padding: 20px;
        font-size: 18px;
        box-sizing: border-box;
    }
    .dresscode__examples {
        display: grid;
        row-gap: 30px;
        grid-template-columns: auto auto;
        align-items: flex-end;
        flex-direction: column;

        &>div>img{
            width: 150px;
            height: 240px;
        }
    }
}
</style>
