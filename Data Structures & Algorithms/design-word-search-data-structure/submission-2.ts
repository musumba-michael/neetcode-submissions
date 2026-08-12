class DictionaryNode{
    endOfWord: boolean = false;
    children: DictionaryNode[]= new Array(26).fill(null);
}
class WordDictionary {
    root: DictionaryNode;
    constructor() {
        this.root = new DictionaryNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let current = this.root;

        for(const char of word){
            let i = char.charCodeAt(0) - 97;
            if(!current.children[i]) current.children[i] = new DictionaryNode();
            current = current.children[i]
        }

        current.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string, current: DictionaryNode = this.root): boolean {
        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (char === '.') {
                // Try every possible character at this position
                for (const child of current.children) {
                    if (child && this.search(word.slice(i + 1), child)) {
                        return true;
                    }
                }

                return false;
            }

            const index = char.charCodeAt(0) - 97;

            if (!current.children[index]) {
                return false;
            }

            current = current.children[index];
        }

        return current.endOfWord;
    }
}
