/* eslint-disable react/no-danger */

export default function ArticleSchema({ postMetadata }: { postMetadata: any }): JSX.Element {
  const imageSrc =
    postMetadata.category === "Recensioni"
      ? `static/images/books/${postMetadata.image}`
      : `static/images/${postMetadata.image}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    image: `https://artedellalettura.it/${imageSrc}`,
    dateModified: postMetadata.updatedAt,
    datePublished: postMetadata.publishedAt,
    headline: postMetadata.title,
    author: {
      "@type": "Person",
      name: `Alessio Franceschi`,
    },
    publisher: {
      "@type": "Organization",
      name: `Arte della Lettura`,
      logo: {
        "@type": "ImageObject",
        url: "https://artedellalettura.it/panda-logo.png",
      },
    },
    mainEntityOfPage: `https://artedellalettura.it/${postMetadata.slug}`,
  };

  return (
    <script
      key={`article-${postMetadata.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
