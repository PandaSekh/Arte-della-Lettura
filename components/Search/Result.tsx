import Post from "../../interfaces/Post";
import RenderPosts from "../Homepage/RenderPosts";

export default function Result({ result }: { result: Array<Post> }): JSX.Element {
  return <RenderPosts posts={result} />;
}
