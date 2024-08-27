import type LinkedList from '../../data_structures/list/linked-list/LinkedList';
import LinkedListNode from '../../data_structures/list/linked-list/Node';

function removeFromNthNodeFromEnd<T>(node: LinkedList<T>, n: number) {
	type NodeType = typeof node.head;
	const dummy = new LinkedListNode<T>(0 as T, node.head);

	let fast: NodeType = dummy;
	for (let i = 0; i < n; i++) {
		fast = fast?.next ?? null;
	}

	let slow: NodeType = dummy;
	while (fast?.next) {
		fast = fast.next;
		slow = slow?.next ?? null;
	}

	slow!.next = slow!.next?.next ?? null;
	return dummy.next;
}

export default removeFromNthNodeFromEnd;
