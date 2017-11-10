
function addBinary(a, b) {
	
	let a_bin = parseInt(a, 2);
	let b_bin = parseInt(b, 2);

	let ans = a_bin + b_bin;

	console.log(ans.toString(2));
	return ans.toString(2);

}

function addBinary_second(a, b){
	let i = 0;
	let ans = '';
	let carry = 0;

	a = a.split("").reverse().join("");
	b = b.split("").reverse().join("");

	while(a.length !== 0 && b.length !== 0) {
		if(a[0] === '0' && b[0] === '0') {
			if(carry) 
				ans = '1' + ans;
			else 
				ans = '0' + ans;
		}
		else if(a[0] === '0' && b[0] === '1') {
			if(carry) {
				ans = '0' + ans;
				carry = 1;
			}
			else
				ans = '1' + ans;
		}
		else if(a[0] === '1' && b[0] === '0') {
			if(carry) {
				ans = '0' + ans;
				carry = 1;
			}
			else
				ans = '1' + ans;
		}
		else {
			if(carry) {
				ans = '1' + ans;
				carry = 1;
			}
			else {
				ans = '0' + ans;
				carry = 1;
			}
		}

		a = a.slice(1);
		b = b.slice(1);
		i += 1;

	}

	if(a.length !== 0) {
		if(carry) {
			while(a.length) {
				if(a[0] === '0'){
					ans = '1' + a.slice(1) + ans;
					carry = 0
					break;
				}
				else {
					ans = '0' + ans;
					carry = 1;
				}

				a = a.slice(1);
			}

			if(carry) {
				ans = '1' + ans;
			}
		}
		else {
			ans = a + ans;
		}
	}

	if(b.length !== 0) {
		if(carry) {
			while(b.length) {
				if(b[0] === '0'){
					ans = '1' + b.slice(1) + ans;
					carry = 0
					break;
				}
				else {
					ans = '0' + ans;
					carry = 1;
				}

				b = b.slice(1);
			}

			if(carry) {
				ans = '1' + ans;
			}
		}
		else {
			ans = b + ans;
		}
	}

	if(a.length !== 0 && b.length !== 0 && carry) {
		ans = '1' + ans;
	}

	return ans;
}

function addBinary_loop(a, b) {

	var lenA = a.length;
    var lenB = b.length;
    var ai = 0;
    var bi = 0;
    var sum = '';
    var carry = 0;
    while(ai < lenA || bi < lenB) {
        var valA = ai < lenA ? parseInt(parseInt(a[lenA - 1 - ai])) : 0;
        var valB = bi < lenB ? parseInt(parseInt(b[lenB - 1 - bi])) : 0;
        var val = valA + valB + carry;
        var rem = val%2;
        carry = val > 1 ? 1 : 0; 
        sum = rem + sum;
        ai++;
        bi++;
    }
    
    return carry > 0 ? carry + sum : sum;
}
// 99.56% - Not mine. Mine didn't work for all cases.

addBinary_loop('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011');


module.exports = addBinary_loop;