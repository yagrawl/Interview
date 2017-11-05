
// Basically looping through the nums list till we find 
// the first instance where target is either equal or
// greater. Could be made better by binary search
function searchInsert(nums, target) {

	let i = 0;
	while(nums[i] < target) {
		i += 1;
	}

	return i;

}
// This solution works and is better than 100% JS submissions

// This solution is better but more messy and longer
// Binary search is obviously more efficient but it worked slower
function searchInsert_efficient(nums, target) {
	
	if(target > nums[nums.length -1]) {
		return nums.length;
	}
	if(target < nums[0]) {
		return 0;
	}

	let left = 0;
	let right = nums.length - 1
	let mid;

	while(left <= right) {
		mid = parseInt((left + right)/2);
		if(nums[mid] > target) {
			right = mid - 1;
			if(right >= 0) {
				if(nums[right] < target) {
					return right + 1;
				}
			}
			else {
				return 0;
			}
		}

		else if(nums[mid] < target) {
			left = mid + 1;
			if(left < nums.length) {
				if(nums[left] > target) {
					return left;
				}
			}
			else {
				return nums.length;
			}
		}
		else {
			return mid;
		}
	}


}
// This solution works and is better than 41.98% JS submissions


module.exports = searchInsert;