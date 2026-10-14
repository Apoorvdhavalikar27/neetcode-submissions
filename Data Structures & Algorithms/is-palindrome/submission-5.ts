class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cs = s.split(" ").join("").toLowerCase().replace(/[^a-z0-9]/g,'');
        let Lp = 0, Rp = cs.length-1;
        if(cs.length == 0 || cs.length == 1){
            return true
        }
        for(let i = 0; i<cs.length; i++){
            if(cs[Lp]==cs[Rp]){
                Lp = Lp+1;
                Rp = Rp-1;
            }
            if((Lp==Rp && cs.length%2!=0) || (cs.length%2==0 && Lp-Rp==1))
            {
                return true
            }
        }
        console.log(cs)
        return false;
    }
}
