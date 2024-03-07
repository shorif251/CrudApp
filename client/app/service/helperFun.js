const months = [
    "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const timeFormater = (defaultTime) => {
 
  const fullDate = defaultTime.split("T");
  const date = fullDate[0].split("-");
  const time = fullDate[1].split(":");
  const hour = time[0];
  const minute = time[1];
  const second = time[2].split(".")[0];

  const year = date[0]
  const month = months[Number(date[1])];
  const day = date[2];
  console.log(month)
  return `${day} ${month} ${year}`
};
