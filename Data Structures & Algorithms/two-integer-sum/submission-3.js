class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let cals = new Map();
        for (let i = 0; i < nums.length; i++) {
            let o = target - nums[i];
            if (cals.has(nums[i])) return [cals.get(nums[i]), i];
            else cals.set(o, i);
        }
    }
}
