
// Basically implemented a stack. Pushing opening brackets
// on the stack and then pop for a closing bracket
// check if it matches, if not return false.
// -- Didn't add check for ']' closing brackets first case
// in the first go
function isValid(s) {

	if(s.length === 0) {
		return true;
	}

	let paren_stack = [];

	for(let i = 0; i < s.length; i++) {
		if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
			paren_stack.push(s[i]);
		}
		else {
			if(paren_stack.length !== 0) {
				
				let top_stack = paren_stack.pop();
				if(top_stack === '(' && s[i] !== ')') {
					return false;
				}
				
				if(top_stack === '{' && s[i] !== '}') {
					return false;
				}
				if(top_stack === '[' && s[i] !== ']') {
					return false;
				}
			}
			else {
				return false;
			}
			
		}
	}

	if(paren_stack.length !== 0) {
		return false;
	}
	return true;
}
// This solution works and is better than 95.28% JS submissions

// I was planning on doing this. The dict makes it cleaner
// But the solution was taken from discussions online
function isValid_clean(s) {

	if(s.length === 0) {
		return true;
	}

	const brackets = {'(':')', '{':'}', '[':']'};
	let paren_stack = [];

	for(let i = 0; i < s.length; i++) {
		if(s[i] in brackets) {
			paren_stack.push(s[i]);
		}
		else if(brackets[paren_stack.pop()] !== s[i]) {
			return false;
		}
	}

	return paren_stack.length == 0;
}
// This solution works and is better than 99.86% JS submissions


module.exports = isValid_clean;