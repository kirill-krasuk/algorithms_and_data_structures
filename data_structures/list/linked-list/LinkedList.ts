/* eslint-disable @typescript-eslint/ban-ts-comment */
import Node from './Node';

class LinkedList<T> {
	// for test
	public head: Node<T> | null = null;
	public tail: Node<T> | null = null;
	private _count = 0;

	getLength() {
		return this._count;
	}

	getHead() {
		return this.head;
	}

	getTail() {
		return this.tail;
	}

	append(value: T) {
		const node = new Node(value);

		this._count++;

		if (!this.head) {
			this.head = node;
			this.tail = node;

			return this;
		}

		this.tail!.next = node;
		this.tail = node;

		return this;
	}

	prepend(value: T) {
		const node = new Node(value, this.head);

		this._count++;

		this.head = node;

		if (!this.tail) {
			this.tail = node;
		}
		return this;
	}

	insertAt(value: T, toPosition = 0) {
		if (toPosition === 0) {
			this.prepend(value);
			return this;
		}

		if (toPosition >= this._count) {
			this.append(value);
			return this;
		}

		this.insertAtPosition(this.head, new Node(value), toPosition);
		this._count++;

		return this;
	}

	remove(value: T): Node<T> | null {
		if (this.head && this.head.value === value) {
			return this.removeHead();
		}

		if (this.tail && this.tail.value === value) {
			return this.removeTail();
		}

		return this.removeNode(value);
	}

	removeHead() {
		if (!this.head) {
			return null;
		}

		const removedNode = this.head;

		this._count--;

		if (this.head.next) {
			this.head = this.head.next;

			return removedNode;
		}

		this.head = null;
		this.tail = null;

		return removedNode;
	}

	removeTail() {
		if (!this.head) {
			return null;
		}

		const removedNode = this.tail;

		this._count--;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;

			return removedNode;
		}

		let currentNode = this.head;

		while (currentNode.next) {
			if (!currentNode.next.next) {
				currentNode.next = null;
			} else {
				currentNode = currentNode.next!;
			}
		}

		this.tail = currentNode;

		return removedNode;
	}

	find(value: (v: T) => boolean): Node<T> | null;
	find(value: T): Node<T> | null;
	find(value: any): Node<T> | null {
		for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
			if (typeof value === 'function') {
				if (value(currentNode.value)) {
					return currentNode;
				}
			}

			if (value === currentNode.value) {
				return currentNode;
			}
		}

		return null;
	}

	contains(value: T) {
		for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
			if (currentNode.value === value) {
				return true;
			}
		}

		return false;
	}

	reverse() {
		let currentNode = this.head;
		let previousNode = null;
		let nextNode = null;

		while (currentNode) {
			nextNode = currentNode.next;

			currentNode.next = previousNode;

			previousNode = currentNode;
			currentNode = nextNode;
		}

		this.tail = this.head;
		this.head = previousNode;
	}

	fromArray(array: T[]) {
		array.forEach((item) => {
			this.append(item);
		});
	}

	isEmpty() {
		return this._count === 0;
	}

	toArray() {
		const arr = [];

		for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
			arr.push(currentNode.value);
		}

		return arr;
	}

	toString() {
		return this.toArray().toString();
	}

	clear() {
		this.head = null;
		this.tail = null;
		this._count = 0;
	}

	* [Symbol.iterator]() {
		for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
			yield currentNode.value;
		}
	}

	private insertAtPosition(
		currentNode: Node<T> | null,
		newNode: Node<T>,
		toPosition: number,
	): void {
		let previousNode = null;

		for (
			let currentPosition = 0;
			currentNode;
			currentNode = currentNode.next, currentPosition++
		) {
			if (currentPosition === toPosition) {
				newNode.next = currentNode;

				if (previousNode) {
					previousNode.next = newNode;
				} else {
					this.head = newNode;
				}

				return;
			}

			previousNode = currentNode;
		}
	}

	private removeNode(value: T): Node<T> | null {
		let previousNode: Node<T> | null = null;

		for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
			if (currentNode.value === value) {
				const removedNode = currentNode;

				if (previousNode) {
					previousNode.next = currentNode.next;

					if (!currentNode.next) {
						this.tail = previousNode;
					}
				}

				this._count--;
				return removedNode;
			}

			previousNode = currentNode;
		}

		return null;
	}

	static from<From>(array: From[]) {
		const list = new LinkedList<From>();

		array.forEach((value) => {
			list.append(value);
		});

		return list;
	}
}

export default LinkedList;
