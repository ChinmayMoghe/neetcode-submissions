class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)) {
            this.keyStore.get(key).push({value,timestamp});
        } else {
            this.keyStore.set(key,[{value,timestamp}]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(this.keyStore.has(key)) {
            const values = this.keyStore.get(key);
            let left = 0;
            let right = values.length - 1;
            let res = '';
            while(left <= right) {
                const mid = left + Math.trunc((right - left) /2);
                const value = values[mid];

                if(value.timestamp <= timestamp) {
                    res = values[mid].value;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            
            return res;

        } else {
            return '';
        }
    }
}
