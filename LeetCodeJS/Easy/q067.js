
function addBinary(a, b) {
	
	let a_bin = parseInt(a, 2);
	let b_bin = parseInt(b, 2);

	let ans = a_bin + b_bin;

	return ans.toString(2);

}

function addBinary_loop(a, b) {

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

addBinary_loop('11100', '1011');


module.exports = addBinary_loop;