const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error();
	} else if (
		arr.includes('--discard-next') ||
		arr.includes('--discard-prev') ||
		arr.includes('--double-next') ||
		arr.includes('--double-prev')
	) {
		const newArr = [...arr];

		for (let i = 0; i < newArr.length; i++) {
			if (newArr[i] === '--discard-next') {
				!newArr[i + 1] ? newArr.splice(i, 1) : newArr.splice(i, 2);
				i -= 1;
			} else if (newArr[i] === '--discard-prev') {
				!newArr[i - 1] ? newArr.splice(i, 1) : newArr.splice(i - 1, 2);
			} else if (newArr[i] === '--double-next') {
				!newArr[i + 1]
					? newArr.splice(i, 1)
					: newArr.splice(i, 1, newArr[i + 1]);
				i++;
			} else if (newArr[i] === '--double-prev') {
				!newArr[i - 1]
					? newArr.splice(i, 1)
					: newArr.splice(i - 1, 2, newArr[i - 1], newArr[i - 1]);
			}
		}

		return newArr;
	} else {
		return arr;
	}
};
