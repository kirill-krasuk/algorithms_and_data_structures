import LinkedList from '../../list/linked-list/LinkedList';

class Queue<T> {
	private list = new LinkedList<T>();

	static from<From>(list?: From[] | LinkedList<From>): Queue<From> {
		const queue = new Queue<From>();

		if (list instanceof LinkedList) {
			for (const value of list.toArray()) {
				queue.enqueue(value);
			}
		}

		if (Array.isArray(list)) {
			for (const value of list) {
				queue.enqueue(value);
			}
		}

		return queue;
	}

	isEmpty() {
		return !this.list.getLength();
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}

		return this.list.getHead()?.value;
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
