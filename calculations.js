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


// пример инкремента 1
let inc1 = 5;
inc1++;
console.log(inc1); 

// пример инкремента 2
let inc2 = 5;
++inc2;
console.log(inc2); 


// пример декремента 1
let decr1 = 5;
decr1--;
console.log(decr1); 

// пример декремента 1
let decr2 = 5;
--decr2;
console.log(decr2); 