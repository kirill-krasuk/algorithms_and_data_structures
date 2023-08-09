import LinkedNode from '../../../../data_structures/list/linked-list/Node';

function findInsertionPoint(
	dummy: LinkedNode<number>,
	current: LinkedNode<number>,
): LinkedNode<number> {
	// preInsert.next is the insertion point
	let preInsert = dummy;

	// find the insertion point in the sorted list
	while (
		preInsert.next
		&& preInsert.next !== current
		&& preInsert.next.value <= current.value
	) {
		preInsert = preInsert.next;
	}

	return preInsert;
}

function insertionSortList(head: LinkedNode<number> | null): LinkedNode<number> | null {
	if (!head || !head.next) return head;

	const dummy = new LinkedNode(0);
	let preCurrent = dummy;

	dummy.next = head;

	// preCurrent.next is the current node
	while (preCurrent.next) {
		const preInsert = findInsertionPoint(dummy, preCurrent.next);

		// if preInsert.next is not equal to preCurrent.next
		// then we need to insert preCurrent.next to the sorted list
		if (preInsert.next !== preCurrent.next) {
			const temp = preCurrent.next!;

			preCurrent.next = temp.next;
			temp.next = preInsert.next;
			preInsert.next = temp;
		} else {
			// if preInsert.next is equal to preCurrent.next then
			// preCurrent.next is already in the sorted list
			// so we just move preCurrent to the next node
			preCurrent = preCurrent.next!;
		}
	}

	return dummy.next;
}

export default insertionSortList;
