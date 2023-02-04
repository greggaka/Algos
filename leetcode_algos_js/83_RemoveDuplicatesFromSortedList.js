/*Leetcode 83 E - Remove Duplicates from Sorted List

Given the head of a sorted linked list,
delete all duplicates such that each element appears only once.
Return the linked list sorted as well.
*/

 //Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))))

/*PseudoCode
1. assign 'head' to the pointer 'current'
2. while loop will check if 'current' node is null and if there is next node
3. loop will run if there IS a 'current' node AND next node exists
4. if the current value === next value, we have a duplicate, so assign next value to the one after
5. else update pointer 'current' to the next node
6. return head after loop has finished
*/

var deleteDuplicates = function(head) {
    let current = head;

    while (current != null && current.next != null) {
        if (current.val == current.next.val) {
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }

    console.log(head);
    
    return head;
}

deleteDuplicates(list);