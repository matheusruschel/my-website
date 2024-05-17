export const splitArrayInHalf = <T>(array: T[]): [T[], T[]] => {
  const midpoint = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint);
  return [firstHalf, secondHalf];
};
