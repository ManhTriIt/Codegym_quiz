// Tinh diem trung binh theo gioi tinh
const array = [
  {
    name: "Ha",
    gender: "female",
    poin: 8,
  },
  {
    name: "Huy",
    gender: "male",
    poin: 9,
  },
  {
    name: "Hung",
    gender: "male",
    poin: 7,
  },
  {
    name: "Phuong",
    gender: "female",
    poin: 6,
  },
  {
    name: "Huyen",
    gender: "female",
    poin: 10,
  },
  {
    name: "Long",
    gender: "male",
    poin: 5,
  },
  {
    name: "Luan",
    gender: "male",
    poin: 10,
  },
  {
    name: "Linh",
    gender: "female",
    poin: 8,
  },
];

let males = 0;
let females = 0;
let totalMalePoint = 0;
let totalFemalePoint = 0;

for (const element of array) {
  if (element.gender === 'male') {
    totalMalePoint += element.poin;
    males++;
  } else {
    totalFemalePoint += element.poin;
    females++;
  }
}

console.log(`Diem trung binh cua nam la: ${totalMalePoint}`);
console.log(`Diem trung binh cua nu la: ${totalFemalePoint}`);