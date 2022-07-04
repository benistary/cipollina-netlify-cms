export const toPrice = (value: number) => {
  return new Intl.NumberFormat("sk", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};

export const toPhoneNumber = (phone: string) => {
  const phoneNumberWithoutSpaces = phone.replace(/\s/g, "");
  return `+421${phoneNumberWithoutSpaces.substr(1)}`;
};
