
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

// Slightly more clean. From Leetcode's solution of vertical scanning
// Basically keep on checking the number of chars that match wrt to 
// the first string
function longestCommonPrefix_efficient(strs) {
	
	if(strs.length === 0) {
		return '';
	}

	for(let i = 0; i < strs[0].length; i++) {
		let temp_char = strs[0][i];
		for(let j = 1; j < strs.length; j++) {
			if(i == strs[j].length || strs[j][i] != temp_char) {
				return strs[0].slice(0, i);
			}
		}
	}

	return strs[0];
}
// This solution works and is better than 99.61% JS submissions

module.exports = longestCommonPrefix_efficient;