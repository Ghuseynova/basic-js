const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
	constructor() {}

	calculateDepth(arr) {
		let maxDepth = 0;

		arr.forEach((item) => {
			if (Array.isArray(item)) {
				const curDepth = this.calculateDepth(item);
				if (curDepth > maxDepth) {
					maxDepth = curDepth;
				}
			}
		});

		return maxDepth + 1;
	}
};
