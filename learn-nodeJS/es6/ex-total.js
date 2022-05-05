const numbers = [13, 122, 12, 4, 17, 3, 44];

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

const total = evenNumbers.reduce((total, currentValue) => {
  return total + currentValue;
});

console.log(`Tổng các số chia hết cho 2 trong mảng là ${total}`);
