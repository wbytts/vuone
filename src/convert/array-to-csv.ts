/**
 * Converts an array to an CSV string.
 *
 * @param {any[]} arr
 * @param {string} [delimiter=',']
 */
export const arrayToCSV = (arr: any[], delimiter = ",") =>
  arr
    .map((v) =>
      v
        .map((x: any) => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x))
        .join(delimiter)
    )
    .join("\n");

