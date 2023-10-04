import Book from "@interfaces/Book";
import Audiobook from "@interfaces/Audiobook";

function getBookFormatInSchema(bookFormat: string): string {
  if (bookFormat === "Paperback" || bookFormat === "Manga") {
    return "http://schema.org/Paperback";
  }
  if (bookFormat === "Hardcover") {
    return "http://schema.org/Hardcover";
  }
  if (bookFormat === "eBook") {
    return "http://schema.org/EBook";
  }
  if (bookFormat === "Audiolibro") {
    return "http://schema.org/AudiobookFormat";
  }

  return "http://schema.org/Paperback";
}

function getBookAuthorInSchema(bookAuthors: Array<string>) {
  if (bookAuthors.length > 1) {
    return bookAuthors.map((author) => {
      return {
        "@type": "Person",
        name: `${author}`,
      };
    });
  }
  return {
    "@type": "Person",
    name: `${bookAuthors[0]}`,
  };
}

function isbn10to13(isbn10: string): string {
  // https://isbn-information.com/convert-isbn-10-to-isbn-13.html
  let isbn13: string;
  // remove last digit
  isbn13 = isbn10.slice(0, -1);
  // add first three digits
  isbn13 = `978${isbn13}`;

  // calc the last digit
  let lastDigitSum = 0;
  isbn13.split("").forEach((char, index) => {
    if (index % 2 === 0) {
      lastDigitSum += Number.parseInt(char, 10);
    } else {
      lastDigitSum += Number.parseInt(char, 10) * 3;
    }
  });

  isbn13 = `${isbn13}${lastDigitSum % 10 === 0 ? 0 : 10 - (lastDigitSum % 10)}`;

  return isbn13;
}

function bookReviewSchemaGen(book: Book | Audiobook): unknown {
  const authors = getBookAuthorInSchema(book.author);
  const bookFormat = getBookFormatInSchema(book.format);

  return {
    "@context": "https://schema.org/",
    "@id": `artedellalettura.it/work/${book.isbn13 ? book.isbn13 : book.isbn}`,
    "@type": "Book",
    name: `${book.title}`,
    url: `https://artedellalettura.it/${book.reviewSlug}`,
    author: authors,
    workExample: {
      "@id": `artedellalettura.it/edition/${
        book.isbn13 ? book.isbn13 : book.isbn
      }`,
      "@type": "Book",
      bookFormat: `${bookFormat}`,
      inLanguage: `${book.language}`,
      isbn: `${book.isbn13 ? book.isbn13 : isbn10to13(book.isbn)}`,
      datePublished: `${book.publishedYear}`,
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: `Alessio Franceschi`,
      },
      reviewRating: {
        author: {
          "@type": "Person",
          name: `Alessio Franceschi`,
        },
        "@type": "Rating",
        bestRating: 5,
        worstRating: 0,
        ratingValue: `${book.rating}`,
      },
    },
  };
}

export { bookReviewSchemaGen };
