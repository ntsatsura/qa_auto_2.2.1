function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
 x -= y;
return x;
}

function divideBalanceByAccounts(x, y, z) {
let balance = x + z
balance /= y;
return balance;
}

function getRestAfterDivision(x, y) {
x %= y;
  return x;
}

let resultIncreaseBalance = increaseBalance(3000, 700);
let resultDecreaseBalance = decreaseBalance(3000, 700);
let resultDivideBalanceByAccounts = divideBalanceByAccounts(3000, 2, 4000);
let resultGetRestAfterDivision = getRestAfterDivision(7000, 3);

console.log(resultIncreaseBalance);
console.log(resultDecreaseBalance);
console.log(resultDivideBalanceByAccounts);
console.log(resultGetRestAfterDivision);
