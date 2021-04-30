<template>
    <div class="static-page-wrapper">
      <h1 class="text-h3 text-weight-bold">INFORMATION</h1>
       <q-scroll-area style="height: 90vh; max-width: 100%;">
      <div v-for="n in 100" :key="n" class="q-py-xs">
        <p v-html="$t('infoText')"></p>
      </div>
    </q-scroll-area>

    </div>
</template>
