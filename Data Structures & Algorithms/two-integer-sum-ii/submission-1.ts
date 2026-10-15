class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        let right = numbers.length-1, left = 0;
        for(let i = 0; i<numbers.length; i++){
            if(numbers[left] + numbers[right] < target){
                left++;
            }
            else if((numbers[left] + numbers[right] > target)){
                right--;
            }
            else{
                return [left+1,right+1]
            }
        }
        return [];
    }
}
