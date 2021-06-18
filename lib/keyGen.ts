export default function getKey(length = 10): string {
  const n = Math.random() * (9 - 0) + 0;
  return n
    .toString()
    .replace(".", "")
    .substring(0, length + 1);
}
