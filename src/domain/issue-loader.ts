import type { IssueListRow } from '@/domain/issue-dto'
import type { Issue } from '@/domain/issue'

/**
 * Loading issue from api server
 *
 * One-indexed as element plus pagination &lt;el-pagination&gt; is one indexed.
 * Indexing inside implementations may vary depending on API of application server
 */
export interface IssueLoader {
  loadIssueCounts(): Promise<number>;
  loadIssuePage(pageSize: number, pageNumber: number): Promise<IssueListRow[]>
  loadIssueDetails(id: number): Promise<Issue>
}

