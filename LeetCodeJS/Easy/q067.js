
function addBinary(a, b) {
	
	let a_bin = parseInt(a, 2);
	let b_bin = parseInt(b, 2);

	let ans = a_bin + b_bin;

	return ans.toString(2);

}

function addBinary_loop(a, b) {

	let carry = 0;
	let ans = '';
	let len;
	let rem_len;

	if(a.length <= b.length) {
		len = a.length;
		rem_len = b.slice(0, b.length - len);
	}
	else {
		len = b.length;
		rem_len = a.slice(0, a.length - len);
	}

	for(let i = 0; i < len; i++) {
		if(a[a.length - 1 - i] === '0' && b[b.length - 1 - i] === '0') {
			if(carry === 0) {
				ans = '0' + ans;
			}
			else {
				ans = '1' + ans;
			}
		}
		else if(a[a.length - 1 - i] === '0' && b[b.length - 1 - i] === '1') {
			if(carry === 0) {
				ans = '1' + ans;
			}
			else {
				ans = '0' + ans;
				carry = 1;
			}
		}
		else if(a[a.length - 1 - i] === '1' && b[b.length - 1 - i] === '0') {
			if(carry === 0) {
				ans = '1' + ans;
			}
			else {
				ans = '0' + ans;
				carry = 1;
			}
		}
		else {
			if(carry === 0) {
				ans = '0' + ans;
				carry = 1;
			}
			else {
				ans = '1' + ans;
				carry = 1;
			}
		}

	}

	if(rem_len.length !== 0) {
		if(carry) {
			for(let i = 0; i < rem_len.length; i++) {
				if(rem_len[rem_len.length - i - 1] === '0') {
					rem_len[rem_len.length - i - 1] = '1';
					break;
				}
				else {
					rem_len[rem_len.length - i - 1] === '0';
				}
			}
			ans = rem_len + ans;
		}
		else {
			ans = rem_len + ans;
		}
	}

	console.log(ans);


	return ans;
}

addBinary_loop('1', '11');


module.exports = addBinary_loop;