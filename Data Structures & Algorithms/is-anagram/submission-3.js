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
        let map = new Map();
        if (sc.length != tc.length) return false;
        for (let i = 0; i < sc.length; i++) {
            let o = map.get(sc[i]);
            if (!o) {
                map.set(sc[i], 1);
            } else {
                o++;
                map.set(sc[i], o);
            }
        }
        for (let j = 0; j < tc.length; j++) {
            let o = map.get(tc[j]);
            o--;
            map.set(tc[j],o);
        }
        map.forEach((value,key)=>{
            if(value != 0) bool = false;
        })
        return bool;
    }
}
