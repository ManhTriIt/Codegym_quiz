// Tính điểm trung bình học sinh trong lớp
const myClass = [
  {
    name: "An Nguyễn",
    score: 9,
  },
  {
    name: "Lê Phan",
    score: 7,
  },
  {
    name: "Bình Đỗ",
    score: 10,
  },
  {
    name: "Anh Phạm",
    score: 8,
  },
];

let totalScore = myClass.reduce((total, currentValue) => {
  return currentValue.score + total;
}, 0);

const average = totalScore / myClass.length;

console.log(`Điểm trung bình của các học sinh trong lớp là: ${average}`);
