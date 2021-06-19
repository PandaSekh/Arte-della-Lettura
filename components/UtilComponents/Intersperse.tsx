import React from "react";
import getKey from "../../lib/keyGen";

export default function Intersperse({
  arr,
  sep,
}: {
  arr: Array<JSX.Element | string>;
  sep: string | JSX.Element;
}): JSX.Element {
  if (arr.length < 1) return <></>;
  const merged: JSX.Element | string = arr.reduce(
    (prev: JSX.Element | string, curr: JSX.Element | string) => (
      <React.Fragment key={getKey()}>{[prev, sep, curr]}</React.Fragment>
    )
  );
  return <>{merged}</>;
}
