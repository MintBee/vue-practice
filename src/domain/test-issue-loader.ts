import type { IssueLoader } from '@/domain/issue-loader'
import { type Issue, IssueStatus } from '@/domain/issue'
import type { IssueListRow } from '@/domain/issue-dto'

export class TestIssueLoader implements IssueLoader {
  testSet: Issue[]

  loadIssueCounts(): Promise<number> {
    return Promise.resolve(this.testSet.length)
  }

  loadIssueDetails(id: number): Promise<Issue> {
    return Promise.resolve(this.testSet[id]);
  }

  loadIssuePage(pageSize: number, pageNumber: number): Promise<IssueListRow[]> {
    console.assert(pageNumber >= 1)
    const offset = pageSize * (pageNumber-1);
    if (offset >= this.testSet.length) {
      return Promise.resolve([]);
    }
    const lastIdx = Math.min(offset + pageSize, this.testSet.length);
    return Promise.resolve(this.testSet.slice(offset, lastIdx))
  }

  constructor(size: number) {
    this.testSet = Array.from(Array(size).keys()).map(i => ({
      id: i,
      title: `T${i}`,
      description: `D${i}`,
      status: IssueStatus.NEW,
      reportedDate: new Date(),
      reporter: `R${i}`,
      type: 'Bug'
    }))
  }
}