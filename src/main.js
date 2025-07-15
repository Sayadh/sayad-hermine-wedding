import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import vAppear from './directives/vAppear'


const i18n = createI18n({
    locale: 'am',
    fallbackLocale: 'ru',
    messages: {
      am: {
        title:'Հարսանյաց հրավիրատոմս',
        countdown:'Հարսանիքին մնաց',
        countdownTimes:{
          days:'օր',
          hours:'ժամ',
          minutes:'րոպե',
          seconds:'վայրկյան'
        },
        invitationText:'Սիրով հրավիրում ենք Ձեզ՝ կիսելու մեզ հետ մեր կյանքի կարևոր և հիշարժան օրը',
        weddingParty:{
          title:'Հարսանյաց հանդիսություն',
          time:'18:00',
          place: 'Գինաց ռեստորանային համալիր',
          city: 'Չարենցավան, Գայի 3',
          buttonText:'Քարտեզ'

        },
        dresscodeText:'Սիրելի հյուրեր, շնորհակալ կլինենք,եթե ձեր տոնական հանդերձանքներն ընտրվեն մեր հարսանիքի գունային գամմային համապատասխան։',
        message:'Սիրով սպասում ենք Ձեզ',
        churchWedding: 'Պսակադրություն',
        saintMaryMother: 'Բջնիի Սուրբ Մարիամ Աստվածածին եկեղեցի',
      },
      ru: {
        churchWedding: 'Венчание',
        saintMaryMother: 'Церковь Святой Марии Богородицы в Бджни',
        title: 'Свадебное приглашение',
        countdown:'до свадьбы осталось',
        countdownTimes:{
          days:'дня',
          hours:'часов',
          minutes:'минут',
          seconds:'секунды'
        },
        invitationText:'Мы счастливы пригласить Вас на нашу свадьбу! Это особенный и радостный для нас день, и мы хотели бы, чтобы Вы стали частью этого праздника.',
        weddingParty:{
          title:'Свадебный Банкет',
          time:'15:00',
          place:'Ресторанный комплекс «Гинац»',
          city:'г. Чаренцаван, улица Гая 3',
          buttonText:'Как добраться'

        },
        dresscodeText:'Мы старались сделать праздник красивым и будем рады, если в своих нарядах вы поддержите стильное настроение нашего вечера.',
        message:'С нетерпением ждем Вас'
      }
    }
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
app.directive('appear', vAppear)
