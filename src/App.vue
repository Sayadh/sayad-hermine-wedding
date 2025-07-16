<template>

  <div class="homepage">
    <RouterView />
  </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useHead} from "@vueuse/head";


useHead({
    title: 'Սայադ 🤍 Հերմինե',
    meta: [
        { name: 'description', content: 'Սիրով սպասում ենք Ձեզ մեր հարսանիքին' },
        { property: 'og:title', content: 'Սայադ 🤍 Հերմինե' },
        { property: 'og:description', content: 'Սիրով սպասում ենք Ձեզ մեր հարսանիքին' },
        { property: 'og:image', content: 'https://sayad-hermine.vercel.app/share.jpeg' },
        { property: 'og:url', content: 'https://sayad-hermine.vercel.app' },
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
