/* eslint-disable react/no-danger */

import { ReactElement } from "react";

export default function BreadcrumbsSchema({
  url,
}: {
  url: string;
}): ReactElement | null {
  let basepath = "https://artedellalettura.it";
  const urlParts = url.split("/");
  const items = urlParts.map((urlPart, index) => {
    const item = {
      "@type": "ListItem",
      position: index + 1,
      name: basepath,
      item: urlPart ? `${basepath}/${urlPart}` : `${basepath}`,
    };
    basepath = urlPart ? `${basepath}/${urlPart}` : `${basepath}`;
    return item;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [...items],
  };

  return (
    <script
      key="logo-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
