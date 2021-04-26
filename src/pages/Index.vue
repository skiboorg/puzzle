<template>
  <q-page class="index-bg">
    <div  class="container">
      <div  class="row index">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12  full-height flex column items-start justify-between">
          <div class="logo">
            <img src="~assets/logo.png" alt="">
          </div>

          <div  class="index-left flex column items-start justify-between">
            <div  class=" ">
              <h1 class="text-white text-h3">We work, you collect, we earn together!</h1>
              <h3 class="text-grey-6 text-body1 ">The system works on the principle of mutual interest of the parties - clients earn, marketers get a real metric of potential consumers!</h3>

            </div>
            <div class="row text-grey-6 q-gutter-xl gt-xs">
              <p>info@qrpuz.com</p>
              <p>info@qrpuz.com</p>
              <p>info@qrpuz.com</p>
            </div>
          </div>

        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 full-height flex column items-center justify-center">
          <div class="big-button cursor-pointer" @click="$user.loggedIn ? $router.push('/game') : $router.push('/auth')">

            <div class="big-button__img">
              <img src="~assets/button.png" alt="">
            </div>
            <div class="big-button__text">
           <svg width="125" height="47" viewBox="0 0 125 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M123.139 25.1036C124.301 23.9223 124.285 22.0228 123.104 20.8611L103.853 1.92895C102.672 0.767179 100.773 0.783007 99.6108 1.9643C98.449 3.1456 98.4648 5.04503 99.6461 6.2068L116.758 23.0354L99.929 40.1467C98.7672 41.328 98.783 43.2275 99.9643 44.3892C101.146 45.551 103.045 45.5352 104.207 44.3539L123.139 25.1036ZM1.025 26.9999L121.025 25.9999L120.975 20.0001L0.975001 21.0001L1.025 26.9999Z" fill="white"/>
            </svg>

              <p class="no-margin">SIGN IN OR SIGN UP</p>
            </div>
          </div>
          <div class="row text-grey-6 q-gutter-xl lt-sm">
              <p>info@qrpuz.com</p>

            </div>


        </div>
      </div>





    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
<style lang="sass">
.index
  height: 80vh
  &-left
    height: 50vh
  &-bg
    height: 100%
    width: 100%
    background: $accent url(~assets/index-bg.png) no-repeat center
    padding-top: 150px
    h1
      max-width: 530px
    h3
      max-width: 530px

.big-button
  position: relative
  &__img
    transition: all 1s linear
    &:hover
      transform: rotate(90deg)
  &__text
    position: absolute
    display: flex
    align-items: center
    justify-content: center
    left: 50%
    top: 50%
    transform: translate(-50%,-50%)
    cursor: pointer
    text-align: center
    margin-bottom: 0
    svg
      position: absolute
      left: -80%
    p
      color: #ffffff
      font-weight: 700
      font-size: 28px
@media (max-width: 768px)
  .index
    text-align: center
    height: unset
    &-left
      height: unset
      margin-bottom: 40px
    &-bg
      padding-top: 70px

  .logo
    text-align: center
    width: 100%
  .big-button
    margin-bottom: 20px
    &__img
      img
        width: 180px
        height: 180px
    &__text
      svg
        width: 50px
        height: 20px
      p
        font-size: 16px

</style>
