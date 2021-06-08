import IComment from "../../interfaces/Comment";
import getKey from "../../lib/keyGen";

export default function Comment({ comment }: { comment: IComment }): JSX.Element {
  return (
    <>
      {comment.username}
      {comment.children && comment.children.map((child) => <Comment comment={child} key={getKey()} />)}
    </>
  );
}
