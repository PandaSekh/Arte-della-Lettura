/* eslint-disable react/no-danger */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ArticleSchema({ postMetadata }: { postMetadata: any }): JSX.Element {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    image: `https://artedellalettura.it/static/images/${postMetadata.image}`,
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
