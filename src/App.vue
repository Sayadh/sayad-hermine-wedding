<template>

  <div class="homepage">
    <RouterView />
  </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useHead} from "@vueuse/head";


useHead({
    title: 'Sayad & Hermine Wedding',
    meta: [
        { name: 'description', content: 'Սիրով սպասում ենք Ձեզ մեր հարսանիքին' },
        { property: 'og:title', content: 'Sayad & Hermine Wedding' },
        { property: 'og:description', content: 'Սիրով սպասում ենք Ձեզ մեր հարսանիքին' },
        { property: 'og:image', content: 'https://yourdomain.com/cover.jpg' },
        { property: 'og:url', content: 'https://yourdomain.com' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
    ]
})

</script>

<style scoped>
.homepage{
  box-sizing: border-box;

}

</style>
