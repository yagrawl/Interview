
// Not my solution. Basically this starts with setting the
// first number in the array as current sum and max sum
// for each sub sequent num, checks if the num itself is greater
// or the sum. If the sum is, then update cursum and if it is greater
// than previous maxsum, update max sum. 
function maxSubArray(nums) {

	if(nums.length === 0) {
		return 0;
	}

	let maxSum = nums[0];
	let curSum = nums[0];

	for(let i = 1; i < nums.length; i++) {
		curSum = Math.max(nums[i], curSum + nums[i]);
		maxSum = Math.max(curSum, maxSum);
	}

	return maxSum;
}
// This solution works and is better than 94.97% JS submissions


module.exports = maxSubArray;