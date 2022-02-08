/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


/** 
 *You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *Input: l1 = [2,4,3], l2 = [5,6,4]
  *Output: [7,0,8]
  *Explanation: 342 + 465 = 807.
 */ 

var addTwoNumbers = function(l1, l2) {
    
    let h = null;
    let t = null;
    let c = 0;
    
    while (l1 !== null || l2 !== null){
        let s = c;

        if(l1 != null){
            s += l1.val;
            l1 = l1.next;
        }
        
        if(l2 != null){
            s += l2.val;
            l2 = l2.next;
        }
        
        let n = new ListNode(Math.floor(s) % 10);
        
        c  = Math.floor(s/10);
        
        if(t == null){
            t = h = n;
        } else {
            t.next = n;
            t = t.next;
        }
    }
    
    if (c > 0){
        t.next = new ListNode(c);
    }
    return h;
};
