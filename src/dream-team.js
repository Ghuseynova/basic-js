const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(arr) {
	if (!arr || !arr.length) return false;

	const stringsArr = arr.filter(
		(arrEl) => typeof arrEl === 'string' || arrEl instanceof String
	);
	const firstUppSortedLetters = stringsArr
		.map((str) => str.trim().slice(0, 1).toUpperCase())
		.sort();
	return firstUppSortedLetters.join('');
};
