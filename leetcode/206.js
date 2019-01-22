/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
     this.val = val;
     this.next = null;
}
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
var reverseList = function(head) {
  let p = head;
  let newH = head
  while (head && head.next) {
      p = head.next; 
      head.next = p.next
      p.next = newH
      newH = p
      
      
  }
  return newH
};
reverseList(head)