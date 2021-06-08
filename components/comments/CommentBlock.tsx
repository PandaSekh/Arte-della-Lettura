import IComment from "../../interfaces/Comment";
import getKey from "../../lib/keyGen";
import AddComment from "./AddComment";
import Comment from "./Comment";

export default function CommentBlock({ slug, comments }: { slug: string; comments: Array<IComment> }): JSX.Element {
  return (
    <>
      {comments && comments.map((c) => <Comment comment={c} key={getKey()} />)}
      <AddComment slug={slug} />
    </>
  );
}
