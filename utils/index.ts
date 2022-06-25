export const toPrice = (value: number) => {
  return new Intl.NumberFormat('sk', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
};
