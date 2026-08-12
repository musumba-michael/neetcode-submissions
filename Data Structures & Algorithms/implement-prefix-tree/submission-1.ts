class TrieNode{
    children: TrieNode[] = new Array(26).fill(null);
    endOfWord: boolean = false;
}
class PrefixTree {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let current = this.root;

        for(const char of word){
            let i = char.charCodeAt(0) - 97;
            if(!current.children[i]){
                current.children[i] = new TrieNode;
            }
            current = current.children[i];
        }
        current.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let current = this.root;
        for(const char of word){
            let i = char.charCodeAt(0) - 97;
            if(!current.children[i]) return false;
            current = current.children[i];
        }

        return current.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let current = this.root;
        for(const char of prefix){
            let i = char.charCodeAt(0) - 97;
            if(!current.children[i]) return false;
            current = current.children[i];
        }

        return true;
    }
}
