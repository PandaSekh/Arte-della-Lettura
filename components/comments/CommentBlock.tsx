import IComment from "../../interfaces/Comment";
import AddComment from "./AddComment";
import Comment from "./Comment";

export default function CommentBlock({ slug, comments }: { slug: string; comments: Array<IComment> }): JSX.Element {
  console.log(comments);
  console.log(typeof comments);
  return (
    <>
      {comments && comments.map((c) => <Comment comment={c} />)}
      <AddComment slug={slug} />
    </>
  );
}
