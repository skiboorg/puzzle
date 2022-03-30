<template>
    <div class="bg-main q-py-lg q-px-xl">
      <h1 class="text-h4 text-weight-bold">{{$t('about_title')}}</h1>
       <q-scroll-area style="height: 70vh; max-width: 100%;">

        <p v-html="$t('aboutText')"></p>

    </q-scroll-area>

    </div>
</template>
