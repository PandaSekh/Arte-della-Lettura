/* eslint-disable react/no-danger */

export default function LogoSchema(): JSX.Element {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `Arte della Lettura`,
    url: "https://artedellalettura.it",
    logo: "https://artedellalettura.it/panda-logo.png",
  };
  return (
    <script key="logo-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
