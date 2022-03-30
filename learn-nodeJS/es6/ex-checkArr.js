const numbers = [23, 4, 3, 2, 87, 34, 99, 2, 100, 101];
const result = numbers.some((num) => {
  return num > 100;
});
if (result) {
    console.log(`Trong mảng có số lớn hơn 100`);
} else {
    console.log(`Trong mảng không có số lớn hơn 100`);
}
