import LinkedList from '../../list/linked-list/LinkedList';

class Queue<T> {
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

	isEmpty() {
		return !this.list.count();
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}

		return this.list.head?.value;
	}

	enqueue(value: T) {
		this.list.append(value);
	}

	dequeue() {
		const removedValue = this.list.removeHead();

		return removedValue ? removedValue.value : null;
	}

	toArray() {
		return this.list.toArray();
	}

	toString() {
		return this.toArray().toString();
	}
}

export default Queue;
