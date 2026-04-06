class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();
        let isDup = false;
        for (let i = 0; i < nums.length; i++){
            if(map.has(nums[i])) isDup = true;
            map.set(nums[i]);
        }
        return isDup;
    }
}
