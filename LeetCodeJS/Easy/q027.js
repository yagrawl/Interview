
// I used what the efficient solution did in q26
// had a tough time figuring out how exactly it
// would work but I got it working. Same again, 
// changing elements instead of deletion
function removeElement(nums, val) {

	let tail = 0;
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] !== val) {
			nums[tail] = nums[i];
			tail += 1;
		}
	}
	
	return tail;
}
// This solution works and is better than 92.88% JS submissions

module.exports = removeElement;