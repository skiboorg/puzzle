<template>
    <div class="static-page-wrapper">
      <h1 class="text-h4  text-weight-bold">{{$t('balance_title')}}</h1>
      <p class="text-grey-6">{{$t('balance_text')}}</p>
      <q-btn-toggle
      v-model="pay_type"
      toggle-color="primary"
      class="q-mb-lg"
      :options="[
        {label: 'WITHDRAW', value: 'WITHDRAW'},
        {label: 'DEPOSIT', value: 'DEPOSIT'}]"/>
      <p class="text-grey-6">ATTENTION! 1 QR = 1 YUAN</p>
      <q-form @submit="formSubmit" class=" q-gutter-sd q-mb-lg">
          <q-input
            filled
            v-model="amount"
            label="Amount *"
            type="number"
            style="width: 320px"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Введите номер телефона']"
          />
        <q-option-group
      :options="pay_options"
      label="Notifications"
      type="radio"
      v-model="pay_system"
    />

          <q-btn size="md" label="WITHDRAW" type="submit" color="primary" class="q-my-sm "/>
        </q-form>
    </div>
</template>
<script>




export default {
  name: 'MainLayout',

  data () {
    return {
      pay_type:'WITHDRAW',
      pay_system:'viza',
      amount:0,
      pay_options: [
        { label: 'VISA', value: 'visa' },
        { label: 'MASTER CARD', value: 'mc' },

      ]
    }
  },
  methods:{
    formSubmit(){
      console.log('submit')
    }
  }

}
</script>
