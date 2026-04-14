class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sc = s.split('');
        let tc = t.split('');
        let bool = true;
        if (sc.length != tc.length) return false;
        sc = sc.sort();
        tc = tc.sort();
        for (let i = 0; i < sc.length; i++){
            bool = sc[i] == tc[i];
            if(bool == false) return bool; 
        }
        return bool;
    }
}
