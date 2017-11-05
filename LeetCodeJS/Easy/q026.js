
// The solution works properly. I had some problems
// with managing the changing length of the nums array
// My initial thought process of keeping track of prev_num
// is fine. Also looked up .splice
function removeDuplicates(nums) {
	
	let prev_num = nums[0]; 
	
	if(nums.length === 0) {
		return 0;
	}

	for(let i = 1; i < nums.length; i++) {
		if(prev_num !== nums[i]) {
			prev_num = nums[i];
		}
		else {
			nums.splice(i, 1);
			i = i - 1;
		}
	}

	return nums.length;
}
// This solution works and is better than 38.98% JS submissions

// This is a solution from the discussions which is efficient
// levreges 'It doesn't matter what you leave beyond the new length'
// by changing in place instead of removing or deleting
function removeDuplicates_efficient(nums) {

	let tail = 0;

	if(nums.length === 0) {
		return 0;
	}

	for(let i = 1; i < nums.length; i++) {
		if(nums[i] !== nums[tail]) {
			tail += 1;
			nums[tail] = nums[i];
		}
	}

	return tail + 1;
}
// This solution works and is better than 99.64% JS submissions


module.exports = removeDuplicates_efficient;