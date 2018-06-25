var twoSum = function(num, target) {
    index_dir = {};
    num.forEach((elt, i) => {index_dir[elt] = i});
    for(let i = 0; i < num.length; i++) {
        let val = target - num[i];
        if(typeof index_dir[val] !== 'undefined' && index_dir[val] !== i) {return [i, index_dir[val]]};
    }
}

console.log(twoSum([2, 7, 10, 12], 9));
