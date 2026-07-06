/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
        const length = nums.length;
    const result = new Array(length);
    
    // Step 1: Calculate prefix products
    result[0] = 1;
    for (let i = 1; i < length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Step 2: Calculate suffix products on the fly and multiply
    let suffixProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
    
    return result;

};