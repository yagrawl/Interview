
function addBinary(a, b) {
	
	let a_bin = parseInt(a, 2);
	let b_bin = parseInt(b, 2);

	let ans = a_bin + b_bin;

	return ans.toString(2);

}


module.exports = addBinary;