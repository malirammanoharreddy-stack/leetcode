/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
    const n = nums.length;
    k %= n; // Normalize k

    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    reverse(0, n - 1); // 1. Reverse entire array
    reverse(0, k - 1); // 2. Reverse first k elements
    reverse(k, n - 1); // 3. Reverse remaining elements
};



