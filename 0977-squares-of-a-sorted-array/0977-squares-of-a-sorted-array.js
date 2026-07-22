/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squ =[]
    for(let i=0;i<nums.length;i++){
        squ.push(nums[i]*nums[i])
    }
    squ.sort((a, b) => a - b);
    return squ
};