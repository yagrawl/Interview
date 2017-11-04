
// Basically a brtue force solution 
// Consulted http://www.rapidtables.com/convert/number/how-roman-numerals-to-number.htm
// ln 10 basically to prevent errors with s[i+1]
// Probably could have created an object with values
function romanToInt(s) {

	let roman_len = s.length;
	let i = 0;
	let ans = 0;
	s += '0';

	while(i < roman_len) {
		switch(s[i]) {
			case 'I':
				if(s[i+1] === 'V') {
					ans += 4;
					i += 2;
				}
				else if(s[i+1] === 'X') {
					ans += 9;
					i += 2;
				}
				else {
					ans += 1;
					i += 1;
				}
				break;

			case 'V':
				ans += 5;
				i += 1;
				break;

			case 'X':
				if(s[i+1] === 'L') {
					ans += 40;
					i += 2;
				}
				else if(s[i+1] === 'C') {
					ans += 90;
					i += 2;
				}
				else {
					ans += 10;
					i += 1;
				}
				break;

			case 'L':
				ans += 50;
				i += 1;
				break;

			case 'C':
				if(s[i+1] === 'D') {
					ans += 400;
					i += 2;
				}
				else if(s[i+1] === 'M') {
					ans += 900;
					i += 2;
				}
				else {
					ans += 100;
					i += 1;
				}
				break;

			case 'D':
				ans += 500;
				i += 1;
				break;

			case 'M':
				ans += 1000;
				i += 1;
				break;

			default:
				i += 1;
				break;
		}
	}

	return ans;
}
// This solution works and is better than 26.24% JS submissions


module.exports = romanToInt;