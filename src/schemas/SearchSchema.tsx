/* eslint-disable react/no-danger */

import { ReactElement } from "react";

export default function SearchSchema(): ReactElement | null {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://artedellalettura.it",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://artedellalettura.it/cerca?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      key="logo-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
