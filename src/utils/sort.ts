export const sortBy = (
  firstValue: string | number,
  secondValue: string | number
): number => {
  if (firstValue < secondValue) {
    return -1;
  }
  if (firstValue > secondValue) {
    return 1;
  }
  return 0;
};
