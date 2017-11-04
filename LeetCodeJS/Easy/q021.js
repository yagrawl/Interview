
// This is not my solution. I figured out the logic
// but had trouble traversing the ans linked list
// I do understand how this works
// Need to get more comfortable with linked lists
function mergeTwoLists(l1, l2) {

	var head = { val : -1, next : null };
    var curr = head;
    
    while(l1 && l2) {
        if(l1.val > l2.val) {
            curr.next = l2;
            l2 = l2.next;
        } 
        else {
            curr.next = l1;
            l1 = l1.next;
        }
        curr = curr.next;
    }

    curr.next = l1 || l2;
    
    return head.next;
}
// This solution works and is better than 98.03% JS submissions

module.exports = mergeTwoLists;