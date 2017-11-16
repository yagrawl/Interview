function climbStairs(n) {
	return helperFib(n + 1);
}

function helperFib(s) {
	if(s <= 1) {
		return s;
	}
	return helperFib(s - 1) + helperFib(s - 2);
}
// This one timed out. 

function climbStairsDP(n) {
	return climbStairsDPHelper(n+1);
}

function climbStairsDPHelper(n) {
	
	let res = Array.apply(null, Array(n)).map(Number.prototype.valueOf,0);
	res[0] = 1;
	res[1] = 1;
	
	for(let i = 2; i < n; i++) {
		let j = 1;
		while(j <= 2 && j <= i) {
			res[i] = res[i] + res[i-j];
			j = j+1;
		}
	}
	return res[n-1];
}
// No clue why this works, but 89 ms



module.exports = climbStairsDP;