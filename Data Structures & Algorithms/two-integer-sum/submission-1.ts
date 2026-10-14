class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        const Seen = new Map<number, number>();
        for(let i =0; i<nums.length; i++){
            const current = nums[i] 
            const next = target - current;
            if (Seen.has(next)){
                return [Seen.get(next),i]
            }
            Seen.set(current,i)
        }
        return[]
    }
}
