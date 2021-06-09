/* eslint-disable no-nested-ternary */
import dynamic from "next/dynamic";
import { useState } from "react";
import IComment from "../../interfaces/Comment";
import getKey from "../../lib/keyGen";
import LoadingComponent from "../UtilComponents/LoadingSpinner";

export default function CommentBlock({
  slug,
  comments,
}: {
  slug: string;
  comments: Array<IComment> | null;
}): JSX.Element {
  const Comment = dynamic(() => import("./Comment"));
  const AddComment = dynamic(() => import("./AddComment"));
  const [showAddComment, setShowAddComment] = useState(false);

  return (
    <>
      <div className="w-full">
        <p className="mx-auto text-center font-bold	">Commenti</p>
        {comments ? (
          Comment ? (
            comments.map((c) => <Comment comment={c} key={getKey()} slug={slug} />)
          ) : (
            <LoadingComponent />
          )
        ) : (
          <p className="mx-auto text-center">Non c&apos;è ancora nessun commento :(</p>
        )}
        {showAddComment ? (
          <AddComment slug={slug} />
        ) : (
          <div className="mx-auto flex my-6">
            <button
              type="submit"
              className="mx-auto py-2 px-4 rounded border hover:pointer hover:text-customBlue outline-none appearance-none select-none	focus:outline-none"
              onClick={() => setShowAddComment(true)}
            >
              Commenta
            </button>
          </div>
        )}
      </div>
    </>
  );
}
