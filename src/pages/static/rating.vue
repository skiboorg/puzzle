<template>
    <div class="static-page-wrapper">
      <h1 class="text-h4  text-weight-bold">{{$t('rating_title')}}</h1>
      <p>{{$t('rating_text')}}</p>
      <q-btn-toggle
      v-model="type"
      toggle-color="primary"
      class="q-mb-lg"
      :options="[
        {label: 'Rating', value: 'rating'},
        {label: 'WITHDRAW', value: 'money'}]"/>
      <q-list v-if="type==='rating'"  class="full-width" >

      <q-item v-for="player in players" :key="player.id">
        <q-item-section avatar>
          <q-avatar>
            <img v-if="player.avatar" :src="player.avatar">
            <img v-else src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{player.nickname}}</q-item-label>
          <q-item-label caption lines="2">
            Games : {{player.games}}
          </q-item-label>
        </q-item-section>

        <q-item-section side >
          Rating : {{player.rating}}
        </q-item-section>
      </q-item>


    </q-list>

    </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
import { date } from 'quasar'
export default {
  data () {
    return {
      type:'rating',
      players:[]
    }
  },
  async mounted() {
    const response_players = await this.$api.get('/api/ratings')
    this.players = response_players.data
    console.log(this.players)
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

  }
}
</script>
