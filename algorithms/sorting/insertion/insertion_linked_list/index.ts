import LinkedNode from '../../../../data_structures/list/linked-list/Node';
import defaultComparator from '../../../../utils/comparator';

function findInsertionPoint<T>(
	dummy: LinkedNode<T>,
	current: LinkedNode<T>,
	comparator: (a: T, b: T) => number,
): LinkedNode<T> {
	// preInsert.next is the insertion point
	let preInsert = dummy;

	// find the insertion point in the sorted list
	while (
		preInsert.next
		&& preInsert.next !== current
		&& comparator(preInsert.next.value, current.value) <= 0
	) {
		preInsert = preInsert.next;
	}

	return preInsert;
}

function insertionSortList<T>(
	head: LinkedNode<T> | null,
	comparator: (a: T, b: T) => number = defaultComparator,
): LinkedNode<T> | null {
	if (!head?.next) return head;

	const dummy = new LinkedNode<T>(null as T);
	let preCurrent = dummy;

	dummy.next = head;

	// preCurrent.next is the current node
	while (preCurrent.next) {
		const preInsert = findInsertionPoint(dummy, preCurrent.next, comparator);

		// if preInsert.next is not equal to preCurrent.next
		// then we need to insert preCurrent.next to the sorted list
		if (preInsert.next !== preCurrent.next) {
			const temp = preCurrent.next;

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
