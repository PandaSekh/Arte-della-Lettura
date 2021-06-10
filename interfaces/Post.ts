/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface Post {
  content: string;
  data: {
    [key: string]: any;
  };
  filePath: string;
}
