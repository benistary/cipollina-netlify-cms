import { OpeningHours } from "../types";

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

function getDayInSlovak(day: string) {
  switch (day) {
    case "Monday":
      return "Pondelok";
    case "Tuesday":
      return "Utorok";
    case "Wednesday":
      return "Streda";
    case "Thursday":
      return "Štvrtok";
    case "Friday":
      return "Piatok";
    case "Saturday":
      return "Sobota";
    case "Sunday":
      return "Nedeľa";
    default:
      return "";
  }
}

export const getOpeningHours = (openingHours: OpeningHours["openingHours"]) => {
  return openingHours.map(({ closes, opens, dayOfWeek, isOpen }) => {
    const from = getDayInSlovak(dayOfWeek[0]).substring(0, 2).toUpperCase();
    const to = getDayInSlovak(dayOfWeek[dayOfWeek.length - 1])
      .substring(0, 2)
      .toUpperCase();

    return {
      days: `${from}-${to}`,
      openingHours: isOpen ? `${opens} - ${closes}` : "ZATVORENÉ",
    };
  });
};
