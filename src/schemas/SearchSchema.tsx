/* eslint-disable react/no-danger */

export default function SearchSchema(): JSX.Element {
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
    <script key="logo-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
