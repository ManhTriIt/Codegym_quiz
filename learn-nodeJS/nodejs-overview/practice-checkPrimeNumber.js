// Kiem tra so nguyen to
const number = 2;
let isPrimeNumber = true;

if (number < 2) {
  isPrimeNumber = false;
}

for (let index = 2; index < number - 1; index++) {
  if (number % index === 0) {
    isPrimeNumber = false;
    break;
  }
}

if (isPrimeNumber) {
  console.log(`${number} là số nguyên tố`);
} else {
  console.log(`${number} không phải là số nguyên tố`);
}
