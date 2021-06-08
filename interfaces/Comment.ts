export default interface Comment {
  id: string;
  username: string;
  date: string | Date;
  email: string;
  content: string;
  children: Array<Comment>;
  parentCommentId: string;
}
