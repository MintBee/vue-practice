<script setup lang="ts">

import type { IssueListRow } from '@/domain/issue-dto'
  defineProps<{
    issue: IssueListRow
  }>()
</script>

<template>
  <q-card cl>
    <q-card-section>
      <div class="row">
        <div class="col">{{ issue.title }}</div>
      </div>
      <div class="row mt-1 text-center">
        <div class="col-2">{{ issue.type }}</div>
        <div class="col-2">{{ issue.status }}</div>
        <div class="col-2 offset-4">{{ issue.reporter }}</div>
        <div class="col-2">{{ issue.reportedDate.toLocaleDateString('kr-KR') }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
</style>