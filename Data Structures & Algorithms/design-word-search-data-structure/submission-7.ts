class TrieNode {
    children:TrieNode[];
    isWord:boolean;
    constructor() {
        this.children = Array.from({length:26},()=>null);
        this.isWord = false;
    }
}

class WordDictionary {
    root:TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let node = this.root;
        const codeA = 'a'.charCodeAt(0); // 97
        for(let char of word) {
            let idx = char.charCodeAt(0) - codeA;

            if(node.children[idx] == null) {
                node.children[idx] = new TrieNode();
            }
            node = node.children[idx];
        }
        // for the last node point to last character of the word we insert
        node.isWord = true; 
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        const codeA = 'a'.charCodeAt(0);

        function hasNoChild(node:TrieNode):boolean {
            for(let child of node.children) {
                if(child) {
                    return false;
                }
            }
            return true;
        }

        function match(node:TrieNode, depth:number):boolean {
          if(!node) return false;
          if(depth === word.length) {
            return node.isWord;
          }
          let char = word[depth];
          if(char === '.') {
            for(let child of node.children) {
                if(child && match(child,depth+1)) {
                    return true;
                }
            }
            return false;
          } else {
            let idx = char.charCodeAt(0) - codeA;
            return match(node.children[idx],depth+1);
          }
        }

        return match(this.root,0);
    }
}
