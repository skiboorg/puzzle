<template>
  <q-layout view="hHh lpR fFf" class="fullscreen" style="user-select: none">
    <q-no-ssr>
      <q-header  class="header q-py-md"   >
        <div class="container">
          <div class="flex items-center justify-between">
            <img v-if="$user.loggedIn" @click="$router.push('/game')" class="cursor-pointer" src="~assets/index/logo.png" alt="">
            <img v-else @click="$router.push('/enter')" class="cursor-pointer" src="~assets/index/logo.png" alt="">
            <div style="width: 300px" class="flex items-center justify-between gt-sm">

               <q-btn v-if="$user.loggedIn" flat dense round to="/lk/profile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                </q-btn>


                <q-btn flat dense round to="/rating">
                  <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7099 1.28994C20.617 1.19621 20.5064 1.12182 20.3845 1.07105C20.2627 1.02028 20.132 0.994141 19.9999 0.994141C19.8679 0.994141 19.7372 1.02028 19.6154 1.07105C19.4935 1.12182 19.3829 1.19621 19.2899 1.28994L12.9999 7.58994L8.70994 3.28994C8.61698 3.19621 8.50637 3.12182 8.38452 3.07105C8.26266 3.02028 8.13195 2.99414 7.99994 2.99414C7.86793 2.99414 7.73722 3.02028 7.61536 3.07105C7.4935 3.12182 7.3829 3.19621 7.28994 3.28994L1.28994 9.28994C1.19621 9.3829 1.12182 9.4935 1.07105 9.61536C1.02028 9.73722 0.994141 9.86793 0.994141 9.99994C0.994141 10.132 1.02028 10.2627 1.07105 10.3845C1.12182 10.5064 1.19621 10.617 1.28994 10.7099C1.3829 10.8037 1.4935 10.8781 1.61536 10.9288C1.73722 10.9796 1.86793 11.0057 1.99994 11.0057C2.13195 11.0057 2.26266 10.9796 2.38452 10.9288C2.50637 10.8781 2.61698 10.8037 2.70994 10.7099L7.99994 5.40994L12.2899 9.70994C12.3829 9.80367 12.4935 9.87806 12.6154 9.92883C12.7372 9.9796 12.8679 10.0057 12.9999 10.0057C13.132 10.0057 13.2627 9.9796 13.3845 9.92883C13.5064 9.87806 13.617 9.80367 13.7099 9.70994L20.7099 2.70994C20.8037 2.61698 20.8781 2.50638 20.9288 2.38452C20.9796 2.26266 21.0057 2.13195 21.0057 1.99994C21.0057 1.86793 20.9796 1.73722 20.9288 1.61536C20.8781 1.4935 20.8037 1.3829 20.7099 1.28994Z" fill="white"/>
                  </svg>

                </q-btn>

                <q-btn flat dense round to="/rules">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </q-btn>



<q-btn flat dense round to="/about">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 16V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 8H12.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
</q-btn>



            </div>
            <q-btn v-if="!$user.loggedIn" @click="$router.push('/enter')" class="gt-sm text-mira" no-caps outline label="Login"/>
            <div v-if="$user.loggedIn" class="flex items-center gt-sm user-stats">
              <img class="q-mr-sm" src="~assets/sol-logo.svg" alt="">
              <p class="q-mb-none q-mr-md">{{$user.user.balance}}</p>
              <q-btn  class=" text-mira" no-caps outline label="withdraw"/>
            </div>
            <div v-if="$user.loggedIn" class="flex items-center gt-sm">
              <div class="q-mr-lg">
                <p class="no-margin">{{$user.user.nickname}}</p>
                <p class="no-margin">Rating: {{$user.user.rating}}</p>
              </div>
              <q-avatar>
                <img v-if="$user.user.avatar" :src="$user.user.avatar">
                <img v-else src="~assets/ava.png">
              </q-avatar>

            </div>
            <q-btn
              flat
              class="lt-md"
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="leftDrawerOpen = !leftDrawerOpen"
            />
          </div>





        </div>

      </q-header>
    </q-no-ssr>
    <q-drawer
      v-model="leftDrawerOpen"
      overlay
      side="right"
      :width="375"
      elevated
      content-class="left-menu flex column items-center justify-evenly bg-accent">
      <q-toolbar class="absolute-top">
        <q-space/>
        <q-btn flat round dense color="white" @click="leftDrawerOpen=!leftDrawerOpen">
          <q-icon name="close" />
        </q-btn>
      </q-toolbar>

      <q-card v-if="$user.loggedIn" class="user-card"  >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img v-if="$user.user.avatar" :src="$user.user.avatar">
              <img v-else src="~assets/ava.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$user.user.nickname}}</q-item-label>
            <q-item-label caption class="text-white">
              {{$user.user.email}}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-card-section >
          <p class="q-mb-xs flex items-center">{{$t('menu_balance')}}: {{$user.user.balance}}
            <span class="inline-block q-ml-xs text-yellow text-bold">SOL</span>
          </p>
          <p class="no-margin">{{$t('menu_rating')}}: {{$user.user.rating}} out of 200</p>
        </q-card-section>
      </q-card>
      <q-list  dark>
        <!--v-if="$user.loggedIn"-->
        <q-item v-if="$user.loggedIn" clickable to="/lk/profile">
          <q-item-section avatar>
            <q-icon color="white" name="chat" />
          </q-item-section>
          <q-item-section>{{$t('menu_profile')}}</q-item-section>
        </q-item>
        <q-item v-if="!$user.loggedIn" clickable to="/enter">
          <q-item-section avatar>
            <q-icon color="white" name="login" />
          </q-item-section>
          <q-item-section>{{$t('menu_login')}}</q-item-section>
        </q-item>
        <!--        v-else-->
        <q-item v-if="$user.loggedIn" clickable to="rating">
          <q-item-section avatar>
            <q-icon color="white" name="bar_chart" />
          </q-item-section>
          <q-item-section>{{$t('menu_rating')}}</q-item-section>
        </q-item>
        <q-item clickable to="/about">
          <q-item-section avatar>
            <q-icon color="white" name="help_outline" />
          </q-item-section>
          <q-item-section>{{$t('menu_about')}}</q-item-section>
        </q-item>
        <q-item clickable to="/rules">
          <q-item-section avatar>

            <q-icon color="white" name="school" />
          </q-item-section>
          <q-item-section>{{$t('menu_rules')}}</q-item-section>
        </q-item>
        <q-item clickable to="info">
          <q-item-section avatar>
            <q-icon color="white" name="info" />
          </q-item-section>
          <q-item-section>{{$t('menu_info')}}</q-item-section>
        </q-item>
        <!--        <q-item clickable to="/feedback">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon color="white" name="feedback" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>{{$t('menu_feedback')}}</q-item-section>-->
        <!--        </q-item>-->

        <!--        <q-item clickable to="/documents">-->
        <!--          <q-item-section avatar>-->
        <!--            <q-icon color="white" name="description" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section class="text-uppercase">{{$t('documents_title')}}</q-item-section>-->
        <!--        </q-item>-->

        <!--        <q-item clickable to="/contacts">-->
        <!--          <q-item-section avatar>-->

        <!--            <q-icon color="white" name="contacts" />-->
        <!--          </q-item-section>-->
        <!--          <q-item-section>{{$t('menu_contacts')}}</q-item-section>-->
        <!--        </q-item>-->

        <!--        <q-separator spaced="md" dark/>-->
        <!--        <q-btn-dropdown flat unelevated color="white" icon="language" :label="$t('menu_language')">-->
        <!--          <q-list>-->
        <!--            <q-item clickable v-close-popup @click="lang='en-us'">-->
        <!--              <q-item-section>-->
        <!--                <q-item-label>English</q-item-label>-->
        <!--              </q-item-section>-->
        <!--            </q-item>-->

        <!--            <q-item clickable v-close-popup @click="lang='cn'">-->
        <!--              <q-item-section>-->
        <!--                <q-item-label>{{$t('menu_lang_ch')}}</q-item-label>-->
        <!--              </q-item-section>-->
        <!--            </q-item>-->


        <!--          </q-list>-->
        <!--        </q-btn-dropdown>-->

      </q-list>
    </q-drawer>
    <q-page-container>
      <q-page >
        <div class="container full-height">
          <router-view />
        </div>


      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      leftDrawerOpen:false,
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'cn', label: 'China' }
      ]

    }
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang
      this.$q.cookies.set('lang',lang)
    }
  },
  methods: {

  }
}
</script>
<style lang="sass">
.header
  position: absolute
//& .q-toolbar
   //position: absolute
.left-menu
  background: $accent url(~assets/menu-bg.png) no-repeat center
  background-size: cover !important
  height: 100vh

</style>
