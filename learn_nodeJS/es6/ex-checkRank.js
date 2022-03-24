const student = [
  {
    name: "A",
    score: 8,
  },
  {
    name: "B",
    score: 3,
  },
  {
    name: "C",
    score: 9,
  },
];

student.sort((a, b) => b.score - a.score); 
// Nếu callback trả về < 0 thì a trước b
// > 0 thì b trước a
// = 0 giữ nguyên vị trí

const index = student.findIndex((element) => {
  return element.name === "A";
});
 
console.log(`Học sinh A có điểm môn toán đứng thứ ${index + 1} trong lớp`);
