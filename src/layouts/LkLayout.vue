<template>
  <q-layout view="hHh lpR fFf">
    <q-no-ssr>
    <q-header  class="bg-accent lt-md"   elevated>
      <q-toolbar>
 <img src="~assets/logo-h.png" alt="">

        <q-toolbar-title>


        </q-toolbar-title>
<q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

      </q-toolbar>
    </q-header>
    </q-no-ssr>
    <q-drawer
      v-model="leftDrawerOpen"
       side="right"
      elevated


      content-class="left-menu flex column items-center justify-center bg-accent"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >

        </q-item-label>

          <q-list  dark>
      <q-item clickable >
        <q-item-section avatar>
<!--          <q-avatar rounded size="sm">-->
<!--            <img src="https://cdn.quasar.dev/img/mountains.jpg">-->
<!--          </q-avatar>-->
            <q-icon color="white" name="chat" />
        </q-item-section>
        <q-item-section>DOCUMENTS</q-item-section>
      </q-item>
            <q-item clickable >
        <q-item-section avatar>
<!--          <q-avatar rounded size="sm">-->
<!--            <img src="https://cdn.quasar.dev/img/mountains.jpg">-->
<!--          </q-avatar>-->
            <q-icon color="white" name="chat" />
        </q-item-section>
        <q-item-section>DOCUMENTS</q-item-section>
      </q-item>
            <q-item clickable >
        <q-item-section avatar>
<!--          <q-avatar rounded size="sm">-->
<!--            <img src="https://cdn.quasar.dev/img/mountains.jpg">-->
<!--          </q-avatar>-->
            <q-icon color="white" name="chat" />
        </q-item-section>
        <q-item-section>DOCUMENTS</q-item-section>
      </q-item>
            <q-item clickable >
        <q-item-section avatar>
<!--          <q-avatar rounded size="sm">-->
<!--            <img src="https://cdn.quasar.dev/img/mountains.jpg">-->
<!--          </q-avatar>-->
            <q-icon color="white" name="chat" />
        </q-item-section>
        <q-item-section>DOCUMENTS</q-item-section>
      </q-item>
            <q-item clickable >
        <q-item-section avatar>
<!--          <q-avatar rounded size="sm">-->
<!--            <img src="https://cdn.quasar.dev/img/mountains.jpg">-->
<!--          </q-avatar>-->
            <q-icon color="white" name="chat" />
        </q-item-section>
        <q-item-section>DOCUMENTS</q-item-section>
      </q-item>
    </q-list>

      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="row">
    <div class="col-3 left-menu flex column items-center justify-around gt-sm">
      <img src="~assets/logo.png" alt="">
      <q-list  dark>
        <q-item clickable to="/game">
          <q-item-section avatar >
            <!--          <q-avatar rounded size="sm">-->
            <!--            <img src="https://cdn.quasar.dev/img/mountains.jpg">-->
            <!--          </q-avatar>-->
            <q-icon color="white" name="west" />
          </q-item-section>
          <q-item-section>BACK</q-item-section>
        </q-item>
          <q-item clickable to="/lk/profile">
          <q-item-section avatar>
            <q-icon color="white" name="manage_accounts" />
          </q-item-section>
          <q-item-section>SETTINGS</q-item-section>
        </q-item>
        <q-item clickable to="/lk/stats">
          <q-item-section avatar>
            <q-icon color="white" name="bar_chart" />
          </q-item-section>
          <q-item-section>STATS</q-item-section>
        </q-item>
        <q-item clickable to="/lk/balance">
          <q-item-section avatar>
            <q-icon color="white" name="account_balance_wallet" />
          </q-item-section>
          <q-item-section>BALANCE</q-item-section>
        </q-item>
        <q-item clickable @click="logoutUser">
          <q-item-section avatar>

            <q-icon color="white" name="logout" />
          </q-item-section>
          <q-item-section>LOGOUT</q-item-section>
        </q-item>

      </q-list>
      <div class="text-grey-6">info@qrpuz.com</div>
    </div>
    <div class="container col-lg-9 col-md-9 col-sm-12 col-xs-12">
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
