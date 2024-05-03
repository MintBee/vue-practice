<script setup lang="ts">
import IssueListItem from '@/components/issue-list/IssueListItem.vue'
import type { IssueListRow } from '@/domain/issue-dto'
import { type Ref, ref, watch, nextTick, watchEffect, computed } from 'vue'
import type { IssueLoader } from '@/domain/issue-loader'

const props = withDefaults(defineProps<{
  issueLoader: IssueLoader,
  initialPageSize?: number,
  initialPageNumber?: number
}>(), {
  initialPageSize: 30,
  initialPageNumber: 1
})

const pageSize = ref(props.initialPageSize)
const pageNumber = ref(props.initialPageNumber)
const issues: Ref<IssueListRow[] | null> = ref(null)
const totalIssueCount = await props.issueLoader.loadIssueCounts()

const maxPageCount = computed(() => {
  return Math.floor(totalIssueCount / pageSize.value) + 1
})

watch(pageNumber, async () => {
  issues.value = null
  await nextTick()
  issues.value = await props.issueLoader.loadIssuePage(pageSize.value, pageNumber.value)
}, { immediate: true })

</script>

<template>
  <ul v-if="issues != null" style="overflow-block: auto">
    <li v-for="issue in issues" :key="issue.id">
      <IssueListItem :issue="issue"></IssueListItem>
    </li>
  </ul>

  <div class="flex flex-center">
    <q-pagination
      v-model:model-value="pageNumber"
      :max="maxPageCount"
      direction-links
      flat
      color="grey"
      active-color="primary"
      max-pages="7"
      class="m-2 pb-3" />
  </div>
</template>

<style scoped>
li + li {
  margin-top: 10px;
}

ul {
  list-style-type: none;
}
</style>