function increaseBalance(x, y) {
  let x1 = x + y;
  return x1;
}

function decreaseBalance(x, y) {
let x2 = x - y;
return x2;
}

function divideBalanceByAccounts(x, y, z) {
let balance = x + z 
let x3 = balance /= y;
return x3;
}

function getRestAfterDivision(x, y) {
  let x4 = x % y;
  return x4;
}

let resultIncreaseBalance = increaseBalance(3000, 700);
let resultDecreaseBalance = decreaseBalance(3000, 700);
let resultDivideBalanceByAccounts = divideBalanceByAccounts(3000, 2, 4000);
let resultGetRestAfterDivision = getRestAfterDivision(7000, 3);

console.log(resultIncreaseBalance);
console.log(resultDecreaseBalance);
console.log(resultDivideBalanceByAccounts);
console.log(resultGetRestAfterDivision);
