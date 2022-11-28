const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
console.log(items);

let tempDate = new Date();
let tempYr = tempDate.getFullYear();
let tempMth = tempDate.getMonth();
let tempDy = tempDate.getDay();

let futureDate = new Date(2022, 11, 31, 11, 59, 5);
// console.log(futureDate);
// const futureDate = new Date(tempYr, tempMth, tempDy + 10, 11, 59, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
console.log(months[month]);
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}AM`;

// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

const getRemainingTime = () => {
  const today = new Date().getTime();
  console.log(today);
  const remainingTime = futureTime - today;
  console.log(remainingTime);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHr = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // calculate all values
  let days = Math.floor(remainingTime / oneDay);
  console.log(days);
  let hrs = Math.floor((remainingTime % oneDay) / oneHr);
  console.log(hrs);
  let mins = Math.floor((remainingTime % oneHr) / oneMin);
  let secs = Math.floor((remainingTime % oneMin) / 1000);

  // set values array
  const values = [days, hrs, mins, secs];

  const format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = values[index];
  });

  if (remainingTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class"expired">sorry, this giveaway has ended</h4>`;
  }
};

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
