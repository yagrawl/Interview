
// O(n^2) - My solution
function find_pair(nums, target) {
	for(let i = 0; i < nums.length; i++) {
		temp_nums = nums.slice(i).map(function(value) {
            return target - value;
        });
        
        //console.log(temp_nums.slice(1));
        if(temp_nums.slice(1).indexOf(nums[i]) >= 0) {
            return [i, i + temp_nums.slice(1).indexOf(nums[i]) + 1];
        }
	}
}
// This solution works and is better than 0.15% JS submissions = SUCKS

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