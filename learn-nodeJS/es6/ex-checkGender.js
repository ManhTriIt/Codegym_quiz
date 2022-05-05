const student = [
  {
    name: "Nguyen Van A",
    sex: "female",
  },
  {
    name: "Nguyen Van B",
    sex: "female",
  },
  {
    name: "Nguyen Van C",
    sex: "female",
  },
];

const result = student.every((student) => {
    return student.sex === "female";
})
if (result) {
    console.log(`Toàn bộ hs trong mảng là nữ`);
} else {
    console.log(`Trong mảng có hs nam`);
}