
// Probably one of the worst solutions ever 
// but it works. Find the length of smallest str
// Then loop that many times and each time see
// if every str contains those
function longestCommonPrefix(strs) {
	
	if(strs.length === 0) {
		return '';
	}

	let ans = '';

	let min_len = strs[0].length;
	for(let i = 0; i < strs.length; i++) {
		if(min_len >= strs[i].length) {
			min_len = strs[i].length;
		}
	}

	for(let j = 0; j < min_len; j++) {
		for(let k = 0; k < strs.length; k++) {
			for(let l = 0; l < strs.length; l++) {
				if(strs[k][j] !== strs[l][j]) {
					return ans;
				}
			}
		}
		ans += strs[0][j];
	}

	return ans;


}
// This solution works and is better than 17.41% JS submissions
// Took less than 25 mins with TDD.

module.exports = longestCommonPrefix;