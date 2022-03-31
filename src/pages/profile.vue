<template>
    <div class="static-page-wrapper">
      <h1 class="text-h4  text-weight-bold">Profile</h1>

    <div class="flex items-center q-mb-xl">
      <div class="q-mr-lg relative-position">
         <q-avatar class="" size="120px">
        <img :src="$user.user.avatar" alt="">
      </q-avatar>
        <q-btn class="absolute-bottom-right" size="12px" dense round  color="white" text-color="dark" icon="edit"/>
      </div>

      <div class="">
        <p class="text-grey-4">Nickname</p>
        <div class="flex nickname">
          <p class="q-mb-none q-mr-lg">{{$user.user.nickname}}</p>
          <p  class="q-mb-none">Edit</p>
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
               <p class="no-margin">JshashSAahahahAHGgsagaJshashSAahahahAHgsaGg...shjs</p>
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
<style lang="sass">
.nickname
  border: 1px solid #878AA4
  box-sizing: border-box
  border-radius: 5px
  padding: 6px 12px
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

