import stringToSlug from "../../lib/stringToSlug";
import { getAuthorBookTitleSlug, getAuthors } from "../../lib/archivesAPI";
import BookTitleSlug from "../../interfaces/BookTitleSlug";
import Link from "next/link";
import keygen from "../../lib/keyGen"

export default function Index({ authorBookJSON }: {
  authorBookJSON: string
}) {
  const authorsBooksMap: Map<string, Array<BookTitleSlug>> = new Map(JSON.parse(authorBookJSON))
  const authorsWithAlphabet = new Map([...mapAuthorsWithInitials(Array.from(authorsBooksMap.keys())).entries()].sort())
  const toBePrinted: Array<any> = []

  // for each letter
  authorsWithAlphabet.forEach((authors: Array<string>, char: string) => {
    const authorsMapped: Array<any> = [];

    // get the books for each author
    const authorsWithBooks: Map<string, Array<BookTitleSlug>> = new Map<string, Array<BookTitleSlug>>();
    authors.forEach(author => {
      authorsWithBooks.set(author, authorsBooksMap.get(author)!)
    })

    // for each author pretty print their books
    authorsWithBooks.forEach((books: Array<BookTitleSlug>, author: string) => {
      const bookTitles = books.map(book => {
        return <li key={keygen()}><Link href={book.reviewSlug}><a className="text-customBlue hover:underline">{book.title}</a></Link></li>
      })
      authorsMapped.push(<div key={keygen()}><Link href={"autori/" + stringToSlug(author)}><a className="underline">{author}</a></Link>: <ul>{bookTitles}</ul></div>)
    })

    // print the letter and the authors with books
    toBePrinted.push(<div className="my-4" key={keygen()}><h3>{char}</h3>{authorsMapped}</div>)
  })

  return (
    <div className="archive mx-auto">
      <h2 className="text-center mx-auto">Recensioni per Autore</h2>
      {toBePrinted}
      <style>
        {`
        .archive ul > li::before {
						content: "";
						position: absolute;
						background-color: #d1d5db;
						border-radius: 50%;
						width: 0.375em;
						height: 0.375em;
						top: calc(0.875em - 0.1875em);
						left: 0.25em;
					}

					.archive ul > li {
						position: relative;
						padding-left: 1.75em;
					}

					.archive ul {
						margin-top: 1.25em;
						margin-bottom: 1.25em;
					}
        `}
      </style>
    </div>)
}

// create a map with a letter as key and authors as values
function mapAuthorsWithInitials(authors: Array<string>) {
  const alphabetMap = new Map<string, Array<string>>()
  authors.forEach(author => {
    const authorsArray = alphabetMap.get(author.charAt(0)) || [];
    authorsArray.push(author);
    authorsArray.sort();
    alphabetMap.set(author.charAt(0), authorsArray);
  })
  return alphabetMap
}

export const getStaticProps = async () => {
  const authors = getAuthors();
  const authorAndBooks = new Map<string, Array<BookTitleSlug>>()
  authors.forEach(author => authorAndBooks.set(author, getAuthorBookTitleSlug(stringToSlug(author))))
  const authorBookJSON = JSON.stringify([...authorAndBooks])
  return { props: { authorBookJSON } };
};