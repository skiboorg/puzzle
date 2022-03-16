<template>
  <q-layout view="hHh lpR fFf">
    <q-no-ssr>
      <q-header  class="bg-accent q-py-lg"   elevated>
        <div class="container">
          <div class="full-width flex items-center justify-between">
            <img v-if="$user.loggedIn" @click="$router.push('/game')" class="cursor-pointer" src="~assets/logo_new.svg" alt="">
            <img v-else @click="$router.push('/enter')" class="cursor-pointer" src="~assets/logo_new.svg" alt="">
            <div  class=" flex items-center justify-evenly gt-sm">

              <div style="width: 300px" class="flex items-center justify-between">
                 <div @click="$router.push('/game')"  class="text-center cursor-pointer">
                <q-icon size="20px" name="west"/>
                <p class="no-margin">Back</p>
              </div>
                <div @click="$router.push('/lk/profile')"  class="text-center cursor-pointer">
                  <q-icon size="20px" name="manage_accounts"/>
                  <p class="no-margin">Settings</p>
                </div>
                <div @click="$router.push('/lk/stats')" class="text-center cursor-pointer">
                  <q-icon size="20px" name="bar_chart"/>
                  <p class="no-margin">Stats</p>
                </div>
                <div @click="$router.push('/lk/balance')" class="text-center cursor-pointer">
                  <q-icon size="20px" name="account_balance_wallet"/>
                  <p class="no-margin">Balance</p>
                </div>

              </div>

            </div>
            <div class="gt-sm">
               <q-btn v-if="!$user.loggedIn" @click="$router.push('/enter')" no-caps outline label="Login"/>
              <div v-if="$user.loggedIn" class="flex items-center">
                <div class="q-mr-lg">
                  <p class="no-margin">{{$user.user.nickname}}</p>
                  <p class="no-margin">Rating: {{$user.user.rating}}</p>
                </div>
                <q-avatar>
                  <img v-if="$user.user.avatar" :src="$user.user.avatar">
                  <img v-else src="~assets/ava.png">
                </q-avatar>

              </div>

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
      side="right"
      :width="375"
      elevated
      content-class="left-menu flex column items-center justify-evenly bg-accent"    >
      <q-card v-if="$user.loggedIn" class="bg-grey-4"  >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img v-if="$user.user.avatar" :src="$user.user.avatar">
              <img v-else src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$user.user.nickname}}</q-item-label>
            <q-item-label caption>
              {{$user.user.email}}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-card-section >
          <p class="q-mb-xs">Balance: {{$user.user.balance + $user.user.add_balance}}</p>
          <p class="no-margin">Rating: {{$user.user.rating}}</p>
        </q-card-section>
      </q-card>
      <q-list  dark>
        <q-item clickable to="/game">
          <q-item-section avatar >
            <!--          <q-avatar rounded size="sm">-->
            <!--            <img src="https://cdn.quasar.dev/img/mountains.jpg">-->
            <!--          </q-avatar>-->
            <q-icon color="white" name="west" />
          </q-item-section>
          <q-item-section>{{$t('menu_back')}}</q-item-section>
        </q-item>
        <q-item clickable to="/lk/profile">
          <q-item-section avatar>
            <q-icon color="white" name="manage_accounts" />
          </q-item-section>
          <q-item-section>{{$t('menu_settings')}}</q-item-section>
        </q-item>
        <q-item clickable to="/lk/stats">
          <q-item-section avatar>
            <q-icon color="white" name="bar_chart" />
          </q-item-section>
          <q-item-section>{{$t('menu_stats')}}</q-item-section>
        </q-item>
        <q-item clickable to="/lk/balance">
          <q-item-section avatar>
            <q-icon color="white" name="account_balance_wallet" />
          </q-item-section>
          <q-item-section>{{$t('menu_balance')}}</q-item-section>
        </q-item>
        <q-item clickable @click="logoutUser">
          <q-item-section avatar>

            <q-icon color="white" name="logout" />
          </q-item-section>
          <q-item-section>{{$t('menu_logout')}}</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page >

        <div class="container ">
          <router-view />
        </div>
      </q-page>

    </q-page-container>
  </q-layout>
</template>

<script>

import { mapActions, mapGetters} from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,

    }
  },
  methods:{
    ...mapActions('auth',['logoutUser'])

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
