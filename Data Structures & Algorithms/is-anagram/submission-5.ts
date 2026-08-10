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

        const s_counter = new Map<string, number>();
        const t_counter = new Map<string, number>();

        for (const char of s) s_counter.set(char, (s_counter.get(char) ?? 0) + 1);

        for (const char of t) t_counter.set(char, (t_counter.get(char) ?? 0) + 1);

        if (s_counter.size !== t_counter.size) return false;

        for (const [char, count] of s_counter) {
            if (t_counter.get(char) !== count) {
                return false;
            }
        }

        return true;
    }
}
