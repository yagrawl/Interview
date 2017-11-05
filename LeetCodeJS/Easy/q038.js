
// Wrote a helper function which basically does : 
// '111221' -> ['111', '22', '1']
// Then using that array, len(111)+1 + len(22)+2 ..so on
function countAndSay(n) {

	if(n === 1) {
		return '1';
	}

	let say = '1';
	let temp;
	for(let i = 2; i <= n; i++) {
		temp = getSay(say);
		say = '';
		for(let j = 0; j < temp.length; j++) {
			say += temp[j].length + temp[j][0];
		}
	}

	return say;
}

function getSay(say) {
	let val = [];
	let prev = say[0];
	let temp = prev;
	for(let i = 1; i <= say.length; i++) {
		if(prev === say[i]) {
			temp += say[i];
		}
		else {
			val.push(temp);
			temp = say[i];
			prev = say[i];
		}
	}
	return val;
}
// This solution works and is better than 27.90% JS submissions


module.exports = countAndSay;