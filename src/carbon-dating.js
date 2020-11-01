const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
	const regex = /^\d+\.?\d*$/;
	if (!regex.test(str) || typeof str !== 'string' || !arguments.length) {
		return false;
	} else {
		if (Number(str) < 0 || Number(str) > 15) {
			return false;
		} else {
			const floatNum = parseInt(str);
			const year = Math.round(
				Math.log(MODERN_ACTIVITY / str) / (0.693 / HALF_LIFE_PERIOD)
			);

			if (year === Infinity) {
				return false;
			}
			return year;
		}
	}
};
