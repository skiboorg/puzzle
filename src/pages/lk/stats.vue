<template>
  <div class="bg-main q-py-lg q-px-xl">
    <h1 class="text-h4 text-capitalize text-weight-bold ">{{$t('stats_title')}}</h1>
    <p>{{$t('profile_stats_text')}}</p>
   <q-scroll-area style="height: 65vh" :thumb-style="thumbStyle"
      :content-style="contentStyle"
      >
    <q-list   class="rounded-borders full-width" >


      <q-item  v-for="game in games" :key="game.id" class="stats-item" :class="[game.result ? 'win' : 'loose']">
        <q-item-section avatar>
          <q-item-label class="text-bold" lines="1">{{game.game_type | formatGameType}}</q-item-label>
          <q-item-label class="text-grey-5 " caption>{{game.start | formatDate}}</q-item-label>
        </q-item-section>
        <q-item-section>
          <img class="game-image"  :src="game.image" alt="">
        </q-item-section>
         <q-item-section side>
          <p class="no-margin text-bold" :class="[game.result ? 'text-lime-13' : 'text-red']">{{game.result ? `WIN` : `LOOSE`}}</p>
        <q-item-label v-if="game.result" class="text-grey-5 " caption>+ {{game.level.rating}} rating</q-item-label>
         </q-item-section>

        <q-item-section side>
          <q-icon  :name="game.result ? 'check' : 'close'" :color="game.result ? 'lime-13' : 'red'" />
        </q-item-section>
      </q-item>

    </q-list>
    </q-scroll-area>
  </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
import { date } from 'quasar'
export default {
  data () {
    return {
      games:[],





      thumbStyle: {
        right: '-12px',
        borderRadius: '5px',
        backgroundColor: '#DCF34E',
        width: '4px',
        opacity: '0.75'
      }


    }
  },
  async mounted() {
    const response_games = await this.$api.get('/api/game_history')
    this.games = response_games.data
    console.log(this.games)
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
<style lang="sass">
.game-image
  width: 50px
  height: 50px
  object-fit: contain
  transition: all .2s ease-out
  &:hover
    width: 400px
    height: 400px

.stats-item
  position: relative
  background: #352072
  margin-bottom: 10px
  &::before
      position: absolute
      content: ''
      height: 100%
      width: 5px

      left: 0
      top: 0
  &.loose
    &::before
      background: $red-13
  &.win
    &::before
      background: $lime-13

</style>
