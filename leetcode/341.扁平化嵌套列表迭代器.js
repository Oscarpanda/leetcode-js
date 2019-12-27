/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 */
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
function  digui(nestedList, arr) {
  for (let i of nestedList) {
    if (Array.isArray(i)) {
      digui(i, arr)
    } else {
      arr.push(i);
    }
  }
}
var NestedIterator = function(nestedList) {
  this.nestedList = nestedList
  let arr = [];
   digui(this.nestedList, arr)
   this.nestedList = arr;
  this.index = 0
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {

  return this.index < this.nestedList.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  let temp = this.nestedList[this.index]
  this.index++
  if (temp !== undefined) {
    return this.next();
  } else {
    return temp
  }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
let a = new NestedIterator([
  [1, 1], 2, [1, 1]
])
a.next()
