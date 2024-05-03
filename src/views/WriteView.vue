<script setup lang="ts">
import axios from 'axios'

const count = 0

const ask = function() {
  axios.get("api/test")
    .then((response) => {
      console.log(response)
    });
}
</script>

<template>
  <el-input placeholder="제목"></el-input>
  <el-input type="textarea" placeholder="내용"></el-input>
  <el-button @click="ask">작성</el-button>
</template>

<style scoped>

</style>