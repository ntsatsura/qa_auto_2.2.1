function increaseBalance(x, y) {
  return (x += y);
}

function decreaseBalance(x, y) {
  return (x -= y);
}

function divideBalanceByAccounts(x, y, z) {
  console.log(x, "this is x");
  return (x /= y);
}

function getRestAfterDivision(x, y) {
  return (x %= y);
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));

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
