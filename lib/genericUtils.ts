export function mapToJSON(map: Map<any, any>): string {
  return JSON.stringify([...map]);
}

/* intersperse: Return an array with the separator interspersed between
 * each element of the input array.
 *
 * https://stackoverflow.com/questions/23618744/rendering-comma-separated-list-of-links
 *
 * > _([1,2,3]).intersperse(0)
 * [1,0,2,0,3]
 */
export function intersperse(arr: Array<any>, sep: string) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(
    function (xs, x, i) {
      return xs.concat([sep, x]);
    },
    [arr[0]]
  );
}
