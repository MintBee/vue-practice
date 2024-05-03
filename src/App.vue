<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/write">글 작성</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
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
