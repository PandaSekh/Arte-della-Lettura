import React, { ReactElement, ReactNode } from "react";

export default function PostContent({
  content,
}: {
  content: ReactNode;
}): ReactElement | null {
  return <>{content}</>;
}
