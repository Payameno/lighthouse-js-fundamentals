const isOdd = function(number) {
  return number % 2 != 0;
}

const threeIsOdd = isOdd(3);
const eightIsOdd = isOdd(8);

console.log("3 is odd:" + isOdd(3));
console.log("8 is odd:" + isOdd(8));