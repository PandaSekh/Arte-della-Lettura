export default interface Book {
  title: string;
  isbn: string;
  isbn13: string;
  synopsis: string;
  author: Array<string>;
  genres: Array<string>;
  language: string;
  publishedYear: string | number;
  ogPublishedYear: string | number;
  pages: number;
  format: string;
  publisher: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  image: string;
  reviewSlug: string;
  readDate: string;
  series: [
    {
      series: string;
      numInSeries: string | number;
    }
  ];
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
