var findErrorNums = function(nums) {
    const seen = new Set();
    let duplicate = 0;
    
    // Step 1: Find the repeating element (duplicate)
    for (const num of nums) {
        if (seen.has(num)) {
            duplicate = num; // Found the duplicate!
        }
        seen.add(num);
    }
    
    // Step 2: Find the missing number by checking the range 1 to n
    let missing = 0;
    for (let i = 1; i <= nums.length; i++) {
        if (!seen.has(i)) {
            missing = i; // Found the missing number!
            break;
        }
    }
    
    return [duplicate, missing];
};
