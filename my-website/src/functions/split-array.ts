export const splitArrayIn = <T>(array: T[], splits: number): T[][] => {
  if (splits <= 0) {
    throw new Error("Number of splits must be greater than 0");
  }

  const result: T[][] = [];
  const splitSize = Math.ceil(array.length / splits);

  for (let i = 0; i < splits; i++) {
    const start = i * splitSize;
    const end = start + splitSize;
    result.push(array.slice(start, end));
  }

  return result;
};