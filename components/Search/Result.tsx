import Post from "@interfaces/Post";
import RenderPosts from "../Homepage/RenderPosts";
import { ReactElement } from "react";

export default function Result({
  result,
}: {
  result: Array<Post>;
}): ReactElement | null {
  return <RenderPosts posts={result} />;
}
