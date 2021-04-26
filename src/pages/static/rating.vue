<template>
    <div class="static-page-wrapper">
      <h1 class="text-h3 text-weight-bold">Rating</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam expedita magnam omnis pariatur possimus quia repellendus sed voluptates! Ad adipisci asperiores consequatur culpa delectus, distinctio dolores dolorum eligendi ex in incidunt, labore laboriosam maxime molestiae nemo nobis, nostrum odit perspiciatis quam quas quasi quia quibusdam quidem quod tempore voluptas.</p>

      <q-list  class="full-width" >

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
      players:[],
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
