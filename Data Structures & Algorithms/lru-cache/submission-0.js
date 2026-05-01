class LRUCache {
    /**
     * @param {number} capacity
     */
    #dllHead;
    #dllTail;
    constructor(capacity) {
        this.size = capacity;
        this.cache = new Map();
        this.#dllHead = new Node(Infinity,null,null);
        this.#dllTail = new Node(-Infinity,null,null);
        this.dll = new DLL(this.#dllHead,this.#dllTail); 
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)) {
            const ref = this.cache.get(key);
            this.dll.remove(ref);
            this.dll.insertAfter(this.#dllHead,ref);
            return ref.val.value; 
        }
        console.log('put',this.cache.size);
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) {
            const ref = this.cache.get(key);
            ref.val = {key,value};
            this.dll.remove(ref);
            this.dll.insertAfter(this.#dllHead,ref);
        } else if(this.cache.size < this.size) {
            const ref = new Node({key, value});
            this.dll.insertAfter(this.#dllHead,ref);
            this.cache.set(key,ref);
        } else {
            const LRUNode = this.dll.remove(this.#dllTail.prev);
            
            this.cache.delete(LRUNode.val.key);

            const ref = new Node({key,value});
            this.dll.insertAfter(this.#dllHead,ref);
            this.cache.set(key,ref);
        }
    }

}

class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class DLL {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
        this.insertAfter(this.head,this.tail);
    }

    insertAfter(refNode, node) {
        const tempNext = refNode?.next;
        refNode.next = node;
        node.prev = refNode;

        node.next = tempNext;

        if (tempNext) {
            tempNext.prev = node;
        }
    }

    insertBefore(refNode, node) {
        const tempPrev = refNode?.prev;
        refNode.prev = node;
        node.next = refNode;
        node.prev = tempPrev;
        if (tempPrev) {
            tempPrev.next = node;
        }
    }
    
    remove(node) {
        const tempPrev = node?.prev;
        if (tempPrev) {
            tempPrev.next = node.next;
            if (node.next) {
                node.next.prev = tempPrev;
            }
        }
        node.prev = null;
        node.next = null;
        return node;
    }
}

/*

Approach: 

LRU cache - 

1. cache - means random access and O(1) lookup - need to use a hashmap 

2. LRU - Least Recently used - need to keep track of most recently used -> least recently used - possible data structures that are keep items in order ? 

       - Arrays - access - O(1) if you have index of them element
                - deletion - O(n) (in the middle or start) O(1) at the end 
                - modification / moving elements around within array - O(n)

I would want to keep updating the LRU in two ways 

 - deleting items from the cache when the limit is reached 
 - track order of items from most recently to least recently used items 


 size = 2 

 put(1,10);                      head-><-(1,10)-><-tail  
 get(1);                         head-><-(1,10)-><-tail -> return 10
 put(2,20);                      head-><-(2,20)-><-(1,10)-><-tail -> add as most recently used
 put(3,30);                      head-><-(3,30)-><-(2,20)-><-tail -> delete 1,10 from list and then from cache, update position of 2,20 to deleted nodes next
 get(2);                         head-><-(2,20)-><-(3,30)-><-tail -> return 20 and also update its position in linked list and as most recently used                   
 get(1);                         head-><-(2,20)-><-(3,30)-><-tail -> does not exist so -1                        



so we keep access to dummy head and tail 

dummy_head.next = <most recently used>
dummy_tail.prev = <least recently used>

// so put will always mark the item as most recently used
// put will also evict the least recently used item last.prev if the size of cache is reached 

// get will mark the node as most recently used only if it exist


// methods in doubly linked list that I would want ?

// insertAfter(node) -> to be used to add most recently used
// insertBefore(node) -> to be used to add least recently used
// remove(node) -> returns the removed node that will be used to insert after head or before tail or just discard it

get 

 - check if key exists 
     - yes 
       - mostRecent()
       - return value 
     - no 
       - -1

put 
  - check if key exists ?
    - yes 
       - update value in linked list 
       - mostRecent()
       - add value, new address in hashmap



*/
