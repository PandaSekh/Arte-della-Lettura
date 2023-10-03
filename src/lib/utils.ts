import Book from "@interfaces/Book";

export function getDateFromStringMMDDYYYY(date: string): Date {
  const parts = date.split("-");
  return new Date(`${parts[1]}-${parts[0]}-${parts[2]}`);
}

/**
 *
 * @param date DD-MM-YYYY
 */
export function getMonthFromDate(date: string): number {
  const parts = date.split("-");
  return Number.parseInt(parts[1], 10);
}

export function stringToSlug(str: string): string {
  let string: string = str;
  string = string.replace(/^\s+|\s+$/g, "");
  string = string.toLowerCase();

  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaeeeeiiiioooouuuunc------";
  for (let i = 0, l = from.length; i < l; i += 1) {
    string = string.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  string = string
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return string;
}

export const months: Array<string> = [];
months[1] = "Gennaio";
months[2] = "Febbraio";
months[3] = "Marzo";
months[4] = "Aprile";
months[5] = "Maggio";
months[6] = "Giugno";
months[7] = "Luglio";
months[8] = "Agosto";
months[9] = "Settembre";
months[10] = "Ottobre";
months[11] = "Novembre";
months[12] = "Dicembre";

export function getKey(length = 10): string {
  const n = Math.random() * (9 - 0) + 0;
  return n
    .toString()
    .replace(".", "")
    .substring(0, length + 1);
}

export function mapToJSON(map: Map<unknown, unknown>): string {
  return JSON.stringify([...map]);
}

export function getBookPages(book: Book): number {
  const { pages } = book;
  if (!pages) return 0;
  return pages;
}
