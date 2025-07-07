const TwoSum = (nums) => {
  let j = nums.length - 1, i = nums.length - 2;
  if (nums.length < 2) {
    return nums[0] || 0 ; 
  }
  nums.sort((a, b) => a - b);
  return nums[i] + nums[j] ;
};

console.log(TwoSum([1, 4, 2, 3, 5])); // 9 (5 + 4)
console.log(TwoSum([10, 20, 30]));    // 50 (30 + 20)
console.log(TwoSum([100]));           // 100 
console.log(TwoSum([]));              // 0 
console.log(TwoSum([-5, -2, -1, -9])); // -3 (-1 + -2)
