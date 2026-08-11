class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];

        for(const bracket of s){
            if ("{[(".includes(bracket)) stack.push(bracket);
            else{
                if(stack.length === 0) return false;
                const top = stack.pop();
                if (bracket == ")" && top != "(") return false
                if (bracket == "}" && top != "{") return false
                if (bracket == "]" && top != "[") return false
            }
        }
        return stack.length === 0;
    }
}
