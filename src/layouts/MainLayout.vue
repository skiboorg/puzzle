<template>
  <q-layout view="hHh lpR fFf" class="fullscreen" style="user-select: none">
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
<!--v-if="$user.loggedIn"-->
         <q-item v-if="$user.loggedIn" clickable to="/lk/profile">
          <q-item-section avatar>
            <q-icon color="white" name="chat" />
          </q-item-section>
          <q-item-section>PROFILE</q-item-section>
        </q-item>
         <q-item v-if="!$user.loggedIn" clickable to="/auth">
          <q-item-section avatar>
            <q-icon color="white" name="login" />
          </q-item-section>
          <q-item-section>LOGIN</q-item-section>
        </q-item>
<!--        v-else-->
        <q-item clickable to="rating">
          <q-item-section avatar>
            <q-icon color="white" name="bar_chart" />
          </q-item-section>
          <q-item-section>RATING</q-item-section>
        </q-item>
          <q-item clickable to="info">
          <q-item-section avatar>
            <q-icon color="white" name="info" />
          </q-item-section>
          <q-item-section>INFO</q-item-section>
        </q-item>
        <q-item clickable to="/about">
          <q-item-section avatar>
            <q-icon color="white" name="help_outline" />
          </q-item-section>
          <q-item-section>ABOUT</q-item-section>
        </q-item>
        <q-item clickable to="/rules">
          <q-item-section avatar>

            <q-icon color="white" name="school" />
          </q-item-section>
          <q-item-section>RULES</q-item-section>
        </q-item>
        <q-item clickable to="/contacts">
          <q-item-section avatar>

            <q-icon color="white" name="contacts" />
          </q-item-section>
          <q-item-section>CONTACTS</q-item-section>
        </q-item>
         <q-item clickable to="/feedback">
          <q-item-section avatar>

            <q-icon color="white" name="feedback" />
          </q-item-section>
          <q-item-section>FEEDBACK</q-item-section>
        </q-item>
        <q-separator spaced="md" dark/>
        <q-btn-dropdown flat unelevated color="white" icon="language" label="LANGUAGE">
      <q-list>
        <q-item clickable v-close-popup @click="lang='en-us'">
          <q-item-section>
            <q-item-label>En</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="lang='cn'">
          <q-item-section>
            <q-item-label>Cn</q-item-label>
          </q-item-section>
        </q-item>


      </q-list>
    </q-btn-dropdown>

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
