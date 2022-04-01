const arr = [
  "chủ nhật",
  "thứ hai",
  "thứ ba",
  "thứ tư",
  "thứ năm",
  "thứ 6",
  "thứ bảy",
];
const currentDay = new Date();
const dayIndex = currentDay.getDay();
console.log("Hôm nay là: " + arr[dayIndex]);
