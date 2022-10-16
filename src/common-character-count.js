const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let template = Array.from(new Set([...s1]));
  for (let elem of template) {
    let reg = new RegExp(`${elem}`, 'gi');
    let count1 = s1.match(reg).length;
    let count2 = (s2.match(reg)) ? s2.match(reg).length : 0;
    count += Math.min(count1, count2);
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
