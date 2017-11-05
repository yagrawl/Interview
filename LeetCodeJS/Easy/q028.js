
// My soltion basically nested for loops
// Flag checks if every thing matched and 
// returns the first occurance.
function strStr(haystack, needle) {

	let index = 0;
	let flag = 0;

	if(haystack === needle || needle === "") {
		return 0;
	}

	for(let i = 0; i < haystack.length; i++) {
		for(let j = 0; j < needle.length; j++) {
			if(haystack[i + j] === needle[j]) {
				index = i;
				flag = 1;
			}
			else {
				flag = 0;
				break;
			}
		}
		if(flag) {
			return index;
		}
	}

	return -1;
}
// Worked for 73/74 test cases. Time Exceeded on last

// This makes more sense. just check from each index 
// if the sliced array is equal to needle
function strStr_efficient(haystack, needle) {

	if(needle === '') {
		return 0;
	}

	for(let i = 0; i < haystack.length; i++) {
		if(haystack.slice(i, i + needle.length) === needle) {
			return i;
		}
	}
	return -1;
}
// This solution works and is better than 89.90% JS submissions


module.exports = strStr_efficient;