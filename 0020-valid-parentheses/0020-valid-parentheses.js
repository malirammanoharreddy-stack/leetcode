/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    
    for (let ch of s) {
        if (ch === '(') stack.push(')');
        else if (ch === '{') stack.push('}');
        else if (ch === '[') stack.push(']');
        else if (stack.pop() !== ch) return false;
    }
    
    return stack.length === 0;
};
