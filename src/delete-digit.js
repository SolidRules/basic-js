const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number}
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strArr = n.toString().split('');
  const length =strArr.length;
  let result = 0;
  let current;
  for (let i = 0; i < length; i++) {
    let arr = [...strArr];
    delete arr[i];
    current = Number(arr.join(''));
    result = (current > result) ? current : result;
  }
  return result;
}

module.exports = {
  deleteDigit
};
