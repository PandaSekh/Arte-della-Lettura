import { Hash } from "@lib/encryption/crypto";
import Comment from "@interfaces/Comment";

export default interface NewCommentData {
  id: string;
  username: string;
  date: string | Date;
  email: Hash | string;
  content: string;
  children: Array<Comment>;
  parentCommentId?: string;
  userimageUrl?: string;
  token: string;
}

export type FormData = {
  id: string;
  username: string;
  date: string | Date;
  email: string;
  content: string;
  parentCommentId: string;
  terms: boolean;
};