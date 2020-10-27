const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if (!arr || !arr.length) return 0;
    return arr.reduce((ac, curArr) =>  [...ac].concat([...curArr])).filter(el => el == '^^').length;
}
