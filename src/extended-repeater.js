const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
	let {
		repeatTimes,
		separator,
		addition,
		additionRepeatTimes,
		additionSeparator,
	} = options;

	str =
		str !== '' && typeof str !== 'string' && str !== null
			? str.toString()
			: str === null
			? 'null'
			: str;
	addition =
		addition !== undefined && typeof addition !== 'string' && addition !== null
			? addition.toString()
			: addition === undefined
			? ''
			: addition;
	repeatTimes = repeatTimes !== undefined ? repeatTimes : 1;
	additionRepeatTimes =
		additionRepeatTimes !== undefined ? additionRepeatTimes : 1;
	separator = separator !== undefined ? separator : '+';
	additionSeparator = additionSeparator !== undefined ? additionSeparator : '|';

	let newStr = '';
	let newAddStr = '';

	for (let i = 1; i <= repeatTimes; i++) {
		for (let j = 1; j <= additionRepeatTimes; j++) {
			newAddStr += addition;

			if (j < additionRepeatTimes) {
				newAddStr += additionSeparator;
			}
		}

		newStr += str + newAddStr;
		newAddStr = '';
		if (i < repeatTimes) {
			newStr += separator;
		}
	}

	return newStr;
};
