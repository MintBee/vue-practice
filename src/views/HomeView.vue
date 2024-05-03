<script setup lang="ts">
import IssueList from '@/components/issue-list/IssueList.vue'
import { TestIssueLoader } from '@/domain/test-issue-loader'
import { ref } from 'vue'

const issueLoader = ref(new TestIssueLoader(10000));
</script>

<template>
  <main>
    <Suspense>
      <IssueList :issue-loader="issueLoader"></IssueList>
    </Suspense>
  </main>
</template>
