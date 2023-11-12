export interface IComment {
  authorImg: string;
  name: string;
  comment: string;
  date: string;
  like: number;
  share: number;
  child?: IComment[]
}
