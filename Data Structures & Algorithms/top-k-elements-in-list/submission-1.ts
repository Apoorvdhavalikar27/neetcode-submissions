class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const map = new Map<number,number>();

        for(const num of nums){
            const key = num;
            if(map.has(key)){
                map.set(key,map.get(key)+1)
            }
            else{
            map.set(key,1)}

        }
        const sols = Array.from(map.keys()).sort((a,b)=>map.get(b)-map.get(a)).splice(0,k)
       
        return sols
    }
}
