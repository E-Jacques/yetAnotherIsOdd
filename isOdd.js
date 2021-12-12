/**
 * Tell you if the number is odd or even
 * @param {Number} n number to evaluate
 * @returns if number is odd or not
 * @throws Error when n is not of type 'number'
 */
function isOdd(n) {
  if (typeof n == "number") {
    return n % 2 == 1;
  }

  throw Error("n is not of type 'number'");
}