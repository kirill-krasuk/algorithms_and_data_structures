import LinkedNode from '../../../../data_structures/list/linked-list/Node';

function insertionSortList(head: LinkedNode<number> | null): LinkedNode<number> | null {
	const dummy = new LinkedNode(0, head);

	let preCurrent = dummy;
	let current = dummy.next;

	while (current) {
		let preInsert = dummy;
		let currentInsert = dummy.next!;

		while (currentInsert !== current && currentInsert.value <= current.value) {
			preInsert = currentInsert;
			currentInsert = currentInsert.next!;
		}

		if (currentInsert !== current) {
			preCurrent.next = current.next;
			current.next = preInsert.next;
			preInsert.next = current;

			current = preCurrent.next;
		} else {
			preCurrent = current;
			current = current.next;
		}
	}

	return dummy.next;
}

export default insertionSortList;
