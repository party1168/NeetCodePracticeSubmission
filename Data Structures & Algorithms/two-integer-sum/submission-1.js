class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let cals = new Map();
        for(let i = 0;i<nums.length;i++){
            let o = target - nums[i];
            let ansindex = cals.get(nums[i]);
            if(ansindex != undefined) return [ansindex,i];
            cals.set(o,i);
        }
    }
}
