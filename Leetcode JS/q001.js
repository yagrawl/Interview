
// O(n^2) - My solution
function find_pair(nums, target) {
	for(let i = 0; i < nums.length; i++) {
		// Creating an array from i to end with complements
		let curr_num = nums.slice(i).map(function(value) {
			return target - value;
		});

		// If complement is in remaining array, return
		if(curr_num.indexOf(nums[i], i) >= 0) {
			console.log([i, i + curr_num.indexOf(nums[i])]);
		}
	}
}
// There's a bunch of stuff wrong with my solution
// Leetcode suggests to not make functions within a loop
// Also, I'm only passing this one test case that I've written below
// There's some problem with this

// O(n) solution - Hash table single pass
// Space O(n)
function find_pair_efficient(nums, target) {
	// Creating a dictionary 
	let complement_mapper = {};
	for(let i = 0; i < nums.length; i++) {
		// If complement already exists, return
		if(nums[i] in complement_mapper) {
			console.log([complement_mapper[nums[i]], i]);
		}
		else {
			// If not then add
			complement_mapper[target - nums[i]] = i;
		}
	}
}
// This solution works and is better than 99.18% JS submissions

find_pair([2, 7, 11, 15], 9);
find_pair_efficient([7, 8, 11, 2], 9);

// Completed - Nov 2, 2017
// Time taken ~ < 30 mins
// Online sources used for : slice (ln 6), map (ln 6), solution #02 (ln 19)