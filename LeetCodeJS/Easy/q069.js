
// Obviously this is what the problem meant to do.
// This is the babylonian method which I had to look up

// Basically for each x, there's some stuff going down.
// There's probably a bitwise method
function mySqrt(x) {
	let temp = x;
	let i = 1;

	while(temp > i) {
		temp = (temp + i)/2
		i = x/temp;
	}

	return parseInt(temp);
}

// I just do this
// which probably isn't what is expected
function mySqrt_mine(x) {
	return parseInt(x ** 0.5);
}

module.exports = mySqrt;