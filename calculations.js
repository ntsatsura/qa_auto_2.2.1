function increaseBalance(x, y) {
  return (x += y);
}

function decreaseBalance(x, y) {
  return (x -= y);
}

function divideBalanceByAccounts(x, y) {
 // console.log(x, "this is x");
  return (x /= y);
}

function getRestAfterDivision(x, y) {
  return (x %= y);
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));

// пример инкремента 1
function exampleIncrement1(inc1) {
    inc1++;
    return inc1;
}

console.log(exampleIncrement1(5));


// пример инкремента 2
function exampleIncrement2(inc2) {
  ++inc2;
  return inc2;
}

console.log(exampleIncrement2(5));


// пример инкремента 3
function exampleIncrement3(inc3) {
  return inc3++;
}

console.log(exampleIncrement3(5));


// пример инкремента 4
function exampleIncrement4(inc4) {
  return ++inc4;
}

console.log(exampleIncrement4(5));


// пример декремента 1
function exampleDecrement1(decr1) {
  decr1--;
  return decr1;
}

console.log(exampleDecrement1(5));


// пример декремента 2
function exampleDecrement2(decr2) {
  --decr2;
  return decr2;
}

console.log(exampleDecrement2(5));


// пример декремента 3
function exampleDecrement3(decr3) {
  return decr3--;
}

console.log(exampleDecrement3(5));


// пример декремента 4
function exampleDecrement4(decr4) {
  return --decr4;
}

console.log(exampleDecrement4(5));

