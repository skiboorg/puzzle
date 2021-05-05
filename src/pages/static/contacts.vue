<template>
  <div class="static-page-wrapper">
    <h1 class="text-h4 text-weight-bold">CONTACTS</h1>
    <p class="text-grey-8">Company: 为注册YY产品与服务相关账号（以下统称“YY账号”）</p>
    <p>Adress: 为务相关账, 以下统称 32 street</p>

    <h3 class="text-h4 text-weight-bold">YOUR MESSAGE</h3>
    <p class="text-grey-8">We will answer you within 24 hours to your specified mail for your support request, question or suggestion!</p>
    <q-form  class="q-gutter-sm"  @submit="formSubmit"  >
      <div class="form-grid ">
        <q-input
          class="col-6"
          filled
          v-model="email"
          label="Enter your mail *"

          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
            <q-input
        filled
        v-model="name"
        label="Enter your name *"

        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      </div>
   <q-input
          filled
          v-model="message"
          class="col-6"
          label="Write here your message... *"
          type="textarea"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />



      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>
<script>


export default {
  name: 'MainLayout',

  data () {
    return {
      name:'',
      email:'',
      message:'',

    }
  },
  methods:{
    formSubmit(){
      this.$q.notify({
          message: 'Message sent',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color: 'positive',
          icon: 'announcement'
        })
    }
  }

}
</script>
<style lang="sass">
.form-grid
  display: grid
  grid-template-columns: 1fr 1fr
  grid-gap: 20px
</style>
