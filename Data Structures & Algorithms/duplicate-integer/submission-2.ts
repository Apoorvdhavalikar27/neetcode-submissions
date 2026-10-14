class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        const MySet = new Set<number>();
        for(const num of nums){
            if(MySet.has(num)){
                return true;
            }
            MySet.add(num)
        }
        return false;
    }
}
