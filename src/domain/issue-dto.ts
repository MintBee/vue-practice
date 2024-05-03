import { IssueStatus } from '@/domain/issue'

export interface IssueListRow {
  id: number,
  title: String,
  status: IssueStatus,
  reportedDate: Date,
  reporter: String,
  type: String
}

