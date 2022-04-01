// Giai phuong trinh ax + b = 0  (với a = 0, b = 2)
const a = 0;
const b = 2;

if (a === 0 && b === 0) {
  console.log("Phương trình có vô số nghiệm");
} else if (a !== 0 && b === 0) {
  console.log("Phương trình có nghiệm x = 0");
} else if (a === 0 && b !== 0) {
  console.log("Phương trình vô nghiệm");
} else {
  console.log(`Nghiệm của phương trình là: x = ${-b / a}`);
}
