export interface Issue {
  id: number;
  title: string;
  description: string;
  reporter: string;
  reportedDate: Date;
  status: IssueStatus;
  type: string;
  assignee?: string;
  fixer?: string;
  comments?: IssueComment[];
}

export const enum IssueStatus {
  NEW = 'NEW',
  ASSIGNED = 'ASSIGNED',
  FIXED = 'FIXED',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED',
}

interface IssueComment {
  comment: string;
  commenter: string;
  commentedDate: Date;
}