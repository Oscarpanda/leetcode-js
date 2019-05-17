/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 let list1 = new ListNode(1);
 list1.next = new ListNode(2);
 list1.next.next = new ListNode(4)
 let list2 = new ListNode(1);
 list2.next = new ListNode(3);
 list2.next.next = new ListNode(4)
var insert  = function (list, node) {
  let temp = new ListNode(-1999999999999);
  temp.next = list;
  let temp1 = temp;
  while(temp && temp.next && temp.next.val <= node) {
    temp = temp.next;
  }
  let newNode = new ListNode(node);
  newNode.next = temp.next;
  temp.next = newNode;
  return temp1.next;
}
var mergeTwoLists = function(l1, l2) {
  while (l1) {
    l2 = insert(l2,l1.val);
    l1 = l1.next;
  }
  return l2
    
};
mergeTwoLists(list1, list2);

