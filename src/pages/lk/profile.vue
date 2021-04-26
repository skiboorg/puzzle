<template>
  <div class="static-page-wrapper">
    <h1 class="text-h3 text-weight-bold">Settings</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam expedita magnam omnis pariatur possimus quia repellendus sed voluptates! Ad adipisci asperiores consequatur culpa delectus, distinctio dolores dolorum eligendi ex in incidunt, labore laboriosam maxime molestiae nemo nobis, nostrum odit perspiciatis quam quas quasi quia quibusdam quidem quod tempore voluptas.</p>
    {{userData.age}}
    <q-form
      @submit="onSubmit"

      class="q-gutter-sm form full-width">
      <div class="row full-width">
        <div class="col-lg-6 col-md-6 col-sm-6 col-sx-12 q-pr-lg-md q-pr-md-md q-pr-sm-md q-pr-xs-none">

         <q-input
        filled
        dense
        v-model="userData.email"
        label="email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
      <q-input
        filled
        dense
        v-model="userData.nickname"
        label="nickname *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"/>
      <q-input
        filled
        dense
        v-model="userData.age"
        type="number"
        class="q-mb-md"
        label="Age "/>
          <div class="flex items-center justify-between">
            <p class="no-margin">Avatar:</p>
          <q-avatar rounded  class="relative-position" size="100px">
            <img :src="$user.user.avatar">
            <label class="absolute-bottom-right cursor-pointer" for="avatar_img">
          <q-icon size="md" color="primary" name="photo_camera"></q-icon>
            <input id="avatar_img" ref="avatar_img" @change="avatarChange($event)" style="display: none" type="file">
          </label>
          </q-avatar>
          </div>


        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-sx-12">
           <q-select filled class="q-mb-md" dense v-model="userData.sex" :options="sex_options" label="Sex" />
      <q-input
        dense
        filled
        class="q-mb-md"
        v-model="userData.study"
        label="study"
      />
       <q-input
              filled
              dense
              class="q-mb-md"
              v-model="userData.work"
              label="work"
            />
      <q-input
              filled
              dense
              v-model="userData.profession"
              label="profession"
            />
        </div>
      </div>
      <div>
          <q-btn label="save"  type="submit" class="q-px-xl q-mb-md" color="primary "/>
      </div>
    </q-form>
  </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      sex_options:[
        'Male', 'Female'
      ],
      avatar:null,
      userData:{


        email:this.$user.user.email,
        nickname:this.$user.user.nickname,
        age:this.$user.user.age,
        sex:this.$user.user.sex,
        study:this.$user.user.study,
        work:this.$user.user.work,
        profession:this.$user.user.profession,

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
      console.log(response.data)
      await this.getUser()
    },

  }
}
</script>
