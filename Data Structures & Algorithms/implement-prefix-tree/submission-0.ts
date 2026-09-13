class TrieNode {
    
    char:string;
    children:TrieNode[];
    isWord:boolean;

    constructor() {
        this.children = Array.from({length:26},() => null);
        this.isWord = false;
    }
}

class PrefixTree {
    root:TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let node = this.root;
        let startCode = 'a'.charCodeAt(0);
        for(let char of word) {
            let idx = char.charCodeAt(0) - startCode;
            if(node.children[idx] == null) {
                node.children[idx] = new TrieNode();
            }
            node = node.children[idx];
        }
        node.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let result = this.findWord(word);
        if(result == null) return false;
        return result.isWord;
    }

    findWord(word:string): TrieNode|null {
        let node = this.root;
        let startCode = 'a'.charCodeAt(0);
        for(let char of word) {
            let idx = char.charCodeAt(0) - startCode;
            if(node.children[idx] == null) {
                return null;
            }
            node = node.children[idx];
        }
        return node;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        return this.findWord(prefix) !== null;
    }
}
