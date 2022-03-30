<template>
    <div class="bg-main q-py-lg q-px-xl">
      <h1 class="text-h4  text-weight-bold text-vela">{{$t('rules_title')}}</h1>
       <q-scroll-area style="height: 70vh; max-width: 100%;">
        <p v-html="$t('rulesText')"></p>
    </q-scroll-area>
    </div>
</template>
