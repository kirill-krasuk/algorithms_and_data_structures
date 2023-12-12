import LinkedList from '../list/linked-list/LinkedList';

class Stack<T> {
	private list!: LinkedList<T>;

	constructor(list?: T[] | LinkedList<T>) {
		if (list instanceof LinkedList) {
			this.list = new LinkedList([...list.toArray()]);
		}

		if (Array.isArray(list)) {
			this.list = new LinkedList([...list]);
		}

		if (!list) {
			this.list = new LinkedList();
		}
	}

	pop() {
		const removedValue = this.list.removeTail();

		return removedValue ? removedValue.value : null;
	}

	push(value: T) {
		this.list.append(value);
	}

	isEmpty() {
		return !this.list.count();
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}

		return this.list.tail?.value;
	}

	toArray() {
		return this.list.toArray();
	}

	toString() {
		return this.toArray().toString();
	}
}

export default Stack;
