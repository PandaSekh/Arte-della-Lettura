import { Hash } from "@lib/encryption/crypto";

export default interface Comment {
  id: string;
  username: string;
  date: string | Date;
  email: Hash | string;
  content: string;
  children: Array<Comment>;
  parentCommentId?: string;
  userimageUrl?: string;
}
