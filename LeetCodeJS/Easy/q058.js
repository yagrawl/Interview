
// Instead of going through the entire array, I loop backwards
// and quit counting once I hit the first space. I had problems with
// figuring out how to deal with trailing spaces in the back just based 
// on the for loop. Used/Learnt to use trim() to get rid of trailing spaces
function lengthOfLastWord(s) {
	let count = 0;
	if(s.length === 0) {
		return 0;
	}

	s = s.trim();

	for(let i = s.length - 1; i >= 0; i--) {
		if(s[i] !== ' ') {
			count += 1;
		} 
		else {
			break;
		}
	}

	return count;
}
// This solution works and is better than 98.73% JS submissions


module.exports = lengthOfLastWord;