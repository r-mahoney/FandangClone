const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

/**
 * Formats a Date object as YYYY-MM-DD.
 *
 * This function is *not* exported because the UI should generally avoid working directly with Date instance.
 * You may export this function if you need it.
 *
 * @param date
 *  an instance of a date object
 * @returns {string}
 *  the specified Date formatted as YYYY-MM-DD
 */
export function asDateString(date: Date) {
  return `${date.getFullYear().toString(10)}-${(date.getMonth() + 1)
    .toString(10)
    .padStart(2, "0")}-${date.getDate().toString(10).padStart(2, "0")}`;
}

/**
 * Today's date as YYYY-MM-DD.
 * @returns {*}
 *  the today's date formatted as YYYY-MM-DD
 */
export function today() {
  return asDateString(new Date());
}

export function getNextSeven(currentDate: string) {
  const nextSeven = [];
  let [year, month, day] = currentDate.split("-");
  month = String(Number(month) - 1);
  for (let i = 0; i < 7; i++) {
    const date = new Date(Number(year), Number(month), Number(day));
    date.setDate(date.getDate() + i);
    date.setMonth(date.getMonth());
    const weekday = days[date.getDay()];
    const dateString = asDateString(date);
    const dayNumber = dateString.split("-")[2];
    const mo = months[Number(dateString.split("-")[1]) - 1];

    if (i === 0) {
      nextSeven.push({
        month: mo,
        day: "Today",
        date: dayNumber,
        dateString: dateString,
      });
    } else {
      nextSeven.push({
        month: mo,
        day: weekday,
        date: dayNumber,
        dateString: dateString,
      });
    }
  }
  return nextSeven;
}
