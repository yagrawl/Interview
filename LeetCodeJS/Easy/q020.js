
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


module.exports = isValid;