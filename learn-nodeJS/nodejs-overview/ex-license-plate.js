// Tim bien so xe Ha Noi
const licensePlateArr = [
  "31-B289877",
  "17-B848836",
  "36-A123999",
  "30-Y988888",
  "29-B589898",
  "40-B234344",
];
const prefix = ["29", "30", "31", "32", "33", "40"];

const checkLicensePlate = (licensePlate) => {
  const checkLicensePlate = prefix.some((currentValue) =>
    licensePlate.startsWith(currentValue)
  );
  return checkLicensePlate;
};

const result = licensePlateArr.filter(checkLicensePlate);
console.log(result);
