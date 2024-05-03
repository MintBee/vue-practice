<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <q-layout view="hhh lpR fff">
    <q-header class="bg-white">
      <nav class="row m-3">
        <div class="col px-2">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="col px-2">
          <RouterLink to="/write">글 작성</RouterLink>
        </div>
      </nav>
    </q-header>
    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
@font-face {
  font-family: "Noto Sans KR";
  src: url("@/assets/fonts/NotoSansKR-VariableFont_wght.ttf") format("ttf");
}

@font-face {
  font-family: "Noto Serif KR";
  src: url("@/assets/fonts/NotoSerifKR-Black.otf") format("otf");
}
</style>
