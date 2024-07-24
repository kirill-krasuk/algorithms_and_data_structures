import LinkedList from '../../list/linked-list/LinkedList';

class ArrayQueue<T> {
	private array: T[] = [];

	isEmpty(): boolean {
		return this.array.length === 0;
	}

	peek(): T | null {
		return this.isEmpty() ? null : this.array[0];
	}

	enqueue(value: T): void {
		this.array.push(value);
	}

	dequeue(): T | null {
		return this.isEmpty() ? null : this.array.shift() || null;
	}

	toArray(): T[] {
		return [...this.array];
	}

	toString(): string {
		return this.array.toString();
	}

	static from<From>(list?: From[] | LinkedList<From>): ArrayQueue<From> {
		const queue = new ArrayQueue<From>();

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
}

export default ArrayQueue;
