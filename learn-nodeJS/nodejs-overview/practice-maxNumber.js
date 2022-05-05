// Tìm số lớn nhất trong mảng
const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = array[0];

for (let number of array) {
  if (max < number) {
    max = number;
  }
}

console.log(`Số lớn nhất là: ${max}`);
