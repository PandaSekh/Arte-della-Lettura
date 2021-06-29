/* eslint-disable react/no-danger */
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import IComment from "@interfaces/Comment";
import { getKey } from "@lib/utils";
import { decrypt, Hash } from "@lib/encryption/crypto";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jdenticon = require("jdenticon");

export default function Comment({
  comment,
  slug,
}: {
  comment: IComment;
  slug: string;
}): JSX.Element {
  const [reply, setReply] = useState(false);
  const isAdmin =
    comment.username === process.env.NEXT_PUBLIC_ADMIN_NAME &&
    decrypt(comment.email as Hash) === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  const AddComment = dynamic(() => import("./AddComment"));

  const icon = useRef(null);
  useEffect(() => {
    jdenticon.update(icon.current, comment.username + comment.id);
  }, [comment]);

  return (
    <div
      className={`rounded border my-3 mr-2 shadow-lg p-4 w-full ${comment.parentCommentId ? "child" : ""
        }`}
    >
      <div className="my-1 flex ">
        {isAdmin ? (
          <Image src="/Panda.svg" width={50} height={50} />
        ) : (
          <svg
            data-jdenticon-value={comment.username + comment.id}
            height={50}
            ref={icon}
            width={50}
          />
        )}
        <div className="flex flex-col">
          <span className="text-sm ">{comment.date}</span>
          <span className="font-semibold">{comment.username}</span>
        </div>
      </div>
      <p className="my-1 break-all">{comment.content}</p>{" "}
      <button
        type="button"
        onClick={() => setReply(!reply)}
        className="hover:text-customBlue outline-none appearance-none select-none	focus:outline-none border-b mb-2"
      >
        Rispondi
      </button>
      {reply && <AddComment slug={slug} parentCommentId={comment.id} />}
      {comment.children &&
        comment.children.map((child) => (
          <Comment comment={child} key={getKey()} slug={slug} />
        ))}
    </div>
  );
}
