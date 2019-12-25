/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cachelist = [];
  this.cache = {};
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cachelist.indexOf(key) !== -1) {
    this.cachelist.splice(this.cachelist.indexOf(key), 1);
    this.cachelist.unshift(key)
    return this.cache[key]
  } else {
    return -1
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cachelist.indexOf(key) !== -1) {
    this.cachelist.splice(this.cachelist.indexOf(key),1);
    this.cachelist.unshift(key)
    this.cache[key] = value
  } else {
    if (this.cachelist.length >=  this.capacity) {
      let temp = this.cachelist.pop();
      delete this.cache[temp];
      this.cachelist.unshift(key)
      this.cache[key] = value
    } else {
      this.cachelist.unshift(key)
      this.cache[key] = value
    }
  }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


let test = new  LRUCache(2)
test.put(2,1)
test.put(2,2)
test.get(2)
test.put(1,1)
test.put(4,1)
test.get(2)
