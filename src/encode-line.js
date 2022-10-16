const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {return ''};
  let arr = [str[0]];
  let result = '';
  for (let i = 1; i <= str.length; i++) {
    if (arr.length === 0) {
      arr.push(str[i]);
    } else if(arr[arr.length -1] === str[i]) {
      arr.push(str[i]);
    } else {
      result += (arr.length > 1) ? `${arr.length}${arr[0]}` : arr[0];
      arr.length = 0;
      arr.push(str[i]);
    }
  }
return result;
}

module.exports = {
  encodeLine
};
