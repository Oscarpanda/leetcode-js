function ListNode(val) {
     this.val = val;
     this.next = null;
}
let head = new ListNode(1)
// head.next = new ListNode(2)
// head.next.next = new ListNode(2)
// head.next.next.next = new ListNode(4)
// head.next.next.next.next = new ListNode(2)
var removeElements = function(head, val) {
  let copy = head;
  while(copy) {
      if (copy.val === val) {
        copy = copy.next; 
        head = copy

      } else if  (copy.next) {
        if (copy.next.val === val) {
          if (copy.next.next) {
            copy.next =copy.next.next 
          } else {
            copy.next = null
          }
        } else {
          copy= copy.next
        }
      } else {
        copy = copy.next
      }
  }
  return head

};
removeElements(head, 1) 