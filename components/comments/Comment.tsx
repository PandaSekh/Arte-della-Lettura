import IComment from "../../interfaces/Comment";

export default function Comment({ comment }: { comment: IComment }): JSX.Element {
  return <p>{comment.username}</p>;
}
