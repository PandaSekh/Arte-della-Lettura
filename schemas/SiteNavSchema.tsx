/* eslint-disable react/no-danger */

export default function LogoSchema(): JSX.Element {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        id: "site-navigation",
        name: "Home",
        url: "https://artedellalettura.it",
      },
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        id: "site-navigation",
        name: "Archivio",
        url: "https://artedellalettura.it/archivio",
      },
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        id: "site-navigation",
        name: "About",
        url: "https://artedellalettura.it/about",
      },
    ],
  };
  return (
    <script key="logo-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
