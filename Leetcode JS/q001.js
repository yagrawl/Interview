
// O(n^2) - My solution
function find_pair(num_array, target) {
	for(let i = 0; i < num_array.length; i++) {
		// Creating an array from i to end with complements
		let curr_num = num_array.slice(i).map(function(value) {
			return target - value;
		});

		// If complement is in remaining array, return
		if(curr_num.indexOf(num_array[i]) >= 0) {
			console.log([i, i + curr_num.indexOf(num_array[i])]);
		}
	}
}

// O(n) solution - Hash table single pass
// Space O(n)
function find_pair_efficient(num_array, target) {
	// Creating a dictionary 
	let complement_mapper = {};
	for(let i = 0; i < num_array.length; i++) {
		// If complement already exists, return
		if(num_array[i] in complement_mapper) {
			console.log([complement_mapper[num_array[i]], i]);
		}
		else {
			// If not then add
			complement_mapper[target - num_array[i]] = i;
		}
	}
}

find_pair([2, 7, 11, 15], 9);
find_pair_efficient([7, 8, 11, 2], 9);

// Completed - Nov 2, 2017
// Time taken ~ < 30 mins
// Online sources used for : slice (ln 6), map (ln 6), solution #02 (ln 19)