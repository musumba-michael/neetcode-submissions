class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // solutions
        // counter for number of occurances of each character using a hashmap
        // sort and interate between both list making sure they have the same elements.

        if (s.length !== t.length) return false;

        const result = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++){
            result[s.charCodeAt(i) - 'a'.charCodeAt(0)] ++;
            result[t.charCodeAt(i) - 'a'.charCodeAt(0)] --;
        }

        return result.every(num => num === 0);
    }
}
