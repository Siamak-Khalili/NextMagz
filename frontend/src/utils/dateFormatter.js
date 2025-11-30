import { toPersianDigits } from "./numberFormatter";

const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export function toLocalDateShort(date) {
  const d = new Date(date);
  const day = toPersianDigits(d.getDate());
  const month = persianMonths[d.getMonth()];
  const year = toPersianDigits(d.getFullYear());
  return `${day} ${month} ${year}`;
}
