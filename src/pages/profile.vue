<template>
    <div class="static-page-wrapper">
      <h1 class="text-h4  text-weight-bold">Profile</h1>

    <div class="flex items-center q-mb-xl">
      <div class="q-mr-lg relative-position">
         <q-avatar rounded  class="relative-position" size="120px">
            <img :src="$user.user.avatar">
            <label class="absolute-bottom-right cursor-pointer" for="avatar_img">
          <q-icon style="background: #fff;padding: 5px;border-radius: 100%" size="sm" color="dark" name="edit"></q-icon>

            <input id="avatar_img" ref="avatar_img" @change="avatarChange($event)" style="display: none" type="file">
          </label>
          </q-avatar>

      </div>

      <div class="">
        <p class="text-grey-4">Nickname</p>
        <div class="flex nickname">

          <q-input dark borderless dense v-model="userData.nickname"/>
          <p  class="q-mb-none cursor-pointer" @click="updateUser()">Save</p>
        </div>
      </div>


    </div>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-8">
          <div class="row q-col-gutter-md q-mb-md">
            <div class="col-12 col-md-6">
               <div class="bg-alt">
               <p class="text-grey-4 q-mb-sm">Balance</p>
                <div class="flex">
                  <img class="q-mr-sm" src="~assets/sol-i.svg" alt="">
                  <p class="no-margin text-h5">SOL {{$user.user.balance}}</p>
                </div>
               </div>
            </div>
            <div class="col-12 col-md-6">
               <div class="bg-alt">
               <p class="text-grey-4 q-mb-sm">Rating</p>
                 <p class="no-margin text-h5">{{$user.user.rating}} LVL</p>
               </div>
            </div>
          </div>
          <div class="bg-alt">
           <p class="text-grey-4 q-mb-sm">Wallet</p>
           <div class="wallet q-mb-sm">
             <div class="wallet-bg">
               <p class="no-margin">{{$user.user.wallet}}</p>
             </div>
             <div class="wallet-bg text-center">
                <q-icon size="24px" name="link"/>
             </div>
           </div>
            <p class="text-lime q-mb-xl">Minimum balance for withdrawal: 2.5 SOL</p>
             <div class="q-gutter-md">
              <q-btn  class="bg-lime text-mira no-border-radius q-px-lg" text-color="dark"  label="WITHDRAW"/>
              <q-btn  class="text-mira no-border-radius q-px-lg" outline text-color="white" label="Change wallet"/>
            </div>

          </div>
        </div>
        <div class="col-12 col-md-4">
           <div class="bg-alt">
           <p class="text-grey-4 q-mb-sm">Your NFT</p>
             <q-img class="q-mb-md" src="~assets/index/1.jpg" alt=""/>
             <p class="q-mb-sm text-h5">250 NFTS</p>
             <p class="text-grey-4 no-margin">20 tasks per day</p>
           </div>
        </div>
      </div>

    </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      avatar:null,
      userData:{
        nickname:this.$user.user.nickname,

      }

    }
  },
  methods: {
    ... mapActions('auth',['getUser']),

    onSubmit () {
      console.log('submit')
      this.updateUser()
    },
    async avatarChange(evt){
      this.avatar = evt.target.files[0]
      await this.updateUser()
    },
    async updateUser(){
      let formData = new FormData()
      formData.set('userData', JSON.stringify(this.userData))
      if (this.avatar){
        formData.set('avatar',this.avatar)
      }
      const response = await this.$api({
        method: 'post',
        headers:{
          'content-type': 'multipart/form-data'
        },
        url: '/api/user/update',
        data: formData
      })
      this.$q.notify({
          message: 'Profile updated',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color: 'positive',
          icon: 'announcement'
        })
      console.log(response.data)
      await this.getUser()
    },

  }
}
</script>
<style lang="sass">
.nickname
  border: 1px solid #878AA4
  box-sizing: border-box
  border-radius: 5px
  padding: 6px 12px
  display: flex
  align-items: center
.bg-alt
  background: #311F66
  border-radius: 5px
  padding: 30px
  height: fit-content
.wallet
  display: grid
  grid-template-columns: 10fr 1fr
  grid-gap: 16px
  &-bg
    background: #3B2A6E
    border-radius: 5px
    padding: 10px
</style>

