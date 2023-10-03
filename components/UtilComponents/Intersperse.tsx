import React, { ReactElement } from "react";
import { getKey } from "@lib/utils";

export default function Intersperse({
  arr,
  sep,
}: {
  arr: Array<ReactElement | null | string>;
  sep: string | ReactElement | null;
}): ReactElement | null {
  if (arr.length < 1) return <></>;
  const merged: ReactElement | null | string = arr.reduce(
    (
      prev: ReactElement | null | string,
      curr: ReactElement | null | string
    ) => <React.Fragment key={getKey()}>{[prev, sep, curr]}</React.Fragment>
  );
  return <>{merged}</>;
}
