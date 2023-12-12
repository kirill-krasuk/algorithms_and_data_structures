/* eslint-disable @typescript-eslint/ban-ts-comment */
import Node from './Node';

class LinkedList<T> {
	public head: Node<T> | null = null;
	public tail: Node<T> | null = null;
	private _count = 0;

	constructor(array?: T[]) {
		if (array) {
			this.fromArray(array);
		}
	}

	count() {
		return this._count;
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
		let previousNode = null;
		let currentNode = this.head;
		let currentPosition = 0;

		while (currentNode) {
			if (currentPosition === toPosition) {
				const newNode = new Node(value, currentNode);

				if (previousNode) {
					previousNode.next = newNode;
				} else {
					this.head = newNode;
				}

				this._count++;
				return this;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
			currentPosition++;
		}

		if (!currentNode) {
			const newNode = new Node(value);

			this._count++;

			if (this.tail) {
				this.tail.next = newNode;
				this.tail = newNode;
			} else {
				this.head = newNode;
				this.tail = newNode;
			}
		}

		return this;
	}

	remove(value: T) {
		let previousNode = null;
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value === value) {
				const removedNode = currentNode;

				if (previousNode) {
					previousNode.next = currentNode.next;

					if (!currentNode.next) {
						this.tail = previousNode;
					}
				} else {
					this.head = this.head!.next;

					if (!this.head) {
						this.tail = null;
					}
				}

				this._count--;
				return removedNode;
			}

			previousNode = currentNode;
			currentNode = currentNode.next;
		}

		return false;
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
		let currentNode = this.head;

		while (currentNode) {
			if (typeof value === 'function') {
				if (value(currentNode.value)) {
					return currentNode;
				}
			}

			if (value === currentNode.value) {
				return currentNode;
			}

			currentNode = currentNode.next;
		}

		return null;
	}

	contains(value: T) {
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value === value) {
				return true;
			}

			currentNode = currentNode.next;
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

	toArray() {
		const arr = [];

		let currentNode = this.head;

		while (currentNode) {
			arr.push(currentNode.value);

			currentNode = currentNode.next;
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
		let currentNode = this.head;

		while (currentNode) {
			yield currentNode.value;
			currentNode = currentNode.next;
		}
	}
}

export default LinkedList;
