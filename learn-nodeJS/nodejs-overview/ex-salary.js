const staff = {
  name: "Bình Nguyễn",
  c: 50000,
  timesheets: [
    {
      date: "1/12/2021",
      hours: 5,
    },
    {
      date: "2/12/2021",
      hours: 8,
    },
    {
      date: "3/12/2021",
      hours: 8,
    },
    {
      date: "4/12/2021",
      hours: 5,
    },
    {
      date: "6/12/2021",
      hours: 8,
    },
    {
      date: "7/12/2021",
      hours: 4,
    },
    {
      date: "8/12/2021",
      hours: 4,
    },
  ],
};

const totalHours = staff.timesheets.reduce((total, currentValue) => {
  return total + currentValue.hours;
}, 0);

const salary = totalHours * staff.c;

console.log(`Lương của nhân viên là: ${salary}`);