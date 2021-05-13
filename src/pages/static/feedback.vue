<template>
  <div class="static-page-wrapper">
    <h1 class="text-h4  text-weight-bold">{{$t('feedback_title')}}</h1>
    <p class="text-grey-6">Only registred users can send their messenges! We attach the contact details of users so that you can contact them and make sure that these reviews are transparent! When you send your review, it will be published only if we pass moderation for violations of the rules of the service.</p>

    <q-scroll-area style="height: 45vh">
    <q-card class="q-mx-xs q-mb-md"  v-for="feedback in feedbacks" :key="feedback.id">
      <q-item>
        <q-item-section>
        </q-item-section>
        <q-item-section side >
          <q-item-label caption>{{feedback.date |formatDate}}</q-item-label>
        </q-item-section>

      </q-item>
        <q-separator/>
      <q-card-section >
        {{feedback.text}}
     </q-card-section>
      <q-card-section horizontal class="justify-between">
        <q-item>
          <q-item-section v-if="feedback.image" thumbnail>
            <img style="object-fit: contain"  :src="feedback.image">
          </q-item-section>
        </q-item>
        <q-item  >
          <q-item-section avatar>
            <q-avatar>
              <img v-if="feedback.user.avatar" :src="feedback.user.avatar">
              <img v-else src="https://cdn.quasar.dev/img/avatar6.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{feedback.user.nickname}}</q-item-label>
            <q-item-label caption lines="1">{{feedback.user.email}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>

    </q-scroll-area>
    <q-form v-if="$user.loggedIn" class="q-gutter-sm" @submit="formSubmit">
   <q-input
          filled
          v-model="message"
          name="message"
          label="Write here your message... *"
          type="textarea"
          autogrow
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

      <div class="flex items-center justify-between">
        <q-file
        name="image"
        dense
        v-model="image"
        style="flex-basis: 20%"
        outlined
        color="primary"
        label="Select image"
      />
        <q-btn size="md" label="Submit" type="submit" color="primary"/>

      </div>
    </q-form>
  </div>
</template>
<script>
import { date } from 'quasar'
export default {
  data () {
    return {
      feedbacks:[],
      message:null,
      image:null
    }
  },
  async mounted() {
    const response_feedbacks = await this.$api.get('/api/all_fb')
    this.feedbacks = response_feedbacks.data
    console.log(this.feedbacks)
  },
  filters:{
    formatDate(val){
      let timeStamp = new Date(val)
      let formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm')
      return formattedString
    },
    formatGameType(val){
      switch(val) {
        case 'puzzle_qr':
          return  'QR PUZZLE'
        case 'puzzle_image':
          return  'ART PUZZLE'

      }
    }
  },

  methods: {
    async formSubmit(evt){
      console.log('submit')
      const formData = new FormData(evt.target)
      const response = await this.$api.post('/api/add_fb',formData)
      this.$q.notify({
          message: 'Message sent',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color: 'positive',
          icon: 'announcement'
        })
      this.message=''
      this.image=null
      console.log(response)
    }
  }
}
</script>
