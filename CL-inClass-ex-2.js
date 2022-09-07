let saleName = "John";
let bonusAmount = 0;
let yearsEmployed = 3;
let sales = 300010;
let scores = 3.6;

if (sales >= 300000 && yearsEmployed > 2 && scores > 8.6) {
  bonusAmount = 50000;
} else if (sales >= 300000 && yearsEmployed > 2 && scores < 8.6) {
  bonusAmount = 35000;
} else if (sales >= 300000 && yearsEmployed < 2) {
  bonusAmount = 25000;
} else if (sales >= 200000 && sales <= 300000) {
  bonusAmount = 10000;
} else if (sales >= 100000 && sales < 200000) {
  bonusAmount = 5000;
} else if (sales < 100000) {
  bonusAmount = 3000;
}

console.log(bonusAmount);
