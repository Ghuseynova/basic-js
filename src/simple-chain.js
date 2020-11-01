const CustomError = require('../extensions/custom-error');

const chainMaker = {
	arr: [],

	getLength() {
		return this.arr.length;
	},

	addLink(value) {
		if (!arguments.length) {
			this.arr.push('(  )');
		} else {
			this.arr.push(`( ${value} )`);
		}
		return this;
	},

	removeLink(position) {
		if (typeof position == 'number') {
			if (
				position < 0 ||
				position.toString().includes('.') ||
				this.arr[position] === undefined
			) {
				this.arr = [];
				throw new Error();
			} else {
				this.arr.splice(position - 1, 1);
			}
		} else {
			this.arr = [];
			throw new Error();
		}
		return this;
	},

	reverseChain() {
		this.arr.reverse();

		console.log(this.arr);

		return this;
	},

	finishChain() {
		const str = this.arr.join('~~');
		console.log(this.arr);
		this.arr = [];

		return str;
	},
};

module.exports = chainMaker;
