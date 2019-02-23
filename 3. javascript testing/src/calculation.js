//Create a divide function
//It should not allow the second parameter to be zero
//should not include more than 1 decimal points
//should divide two numbers

const Calculation = {
	add: function (x, y) {

		if (typeof x !== 'number' || typeof y !== 'number') {
			throw Error("Parameters must be numbers");
		}

		let result = x + y;

		if (parseInt(result) !== result) {
			result = parseFloat(result.toFixed(1));
		}
		console.log(typeof result, result);
		return result;
	},
	divide(x, y) {
		if (typeof x !== 'number' || typeof y !== 'number') {
			throw Error("Parameters must be numbers");
		}
		console.log(y);
		if(y === 0){
			throw Error('Cannot Divide by zero');
		}

		const result  = x/y;

		return result;
	}
}