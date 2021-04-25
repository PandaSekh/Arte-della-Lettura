export function mapToJSON(map: Map<any, any>): string {
  return JSON.stringify([...map])
}