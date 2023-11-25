export const formatNumber = (digit: number) => {
  return new Intl.NumberFormat("es-MX").format(digit);
};
