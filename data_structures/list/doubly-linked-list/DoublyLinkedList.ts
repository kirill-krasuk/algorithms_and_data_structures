/* eslint-disable no-multi-assign */
import Node from './Node';

class DoublyLinkedList<T> {
	// for tests
	public head: Node<T> | null = null;
	public tail: Node<T> | null = null;
	private _count = 0;

	count() {
		return this._count;
	}

	append(value: T) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			if (this.tail) {
				this.tail.next = newNode;
			}
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this._count++;
		return this;
	}

	prepend(value: T) {
		const newNode = new Node(value, null, this.head);

		if (this.head) {
			this.head.prev = newNode;
		} else {
			this.tail = newNode;
		}

		this.head = newNode;
		this._count++;

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

	remove(value: T) {
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

		if (this.head && !this.head.next) {
			this.head = null;
			this.tail = null;

			return removedNode;
		}

		this.head = this.head.next;
		this.head!.prev = null;

		return removedNode;
	}

	removeTail() {
		if (!this.tail) return null;

		const removedNode = this.tail;
		this._count--;

		if (this.tail.prev) {
			this.tail = this.tail.prev;
			this.tail.next = null;
		} else {
			this.head = this.tail = null;
		}

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
		for (let currentNode = this.head; currentNode; currentNode = currentNode.next) {
			if (currentNode.value === value) return true;
		}

		return false;
	}

	reverse() {
		let currentNode = this.head;
		[this.head, this.tail] = [this.tail, this.head];

		while (currentNode) {
			[currentNode.next, currentNode.prev] = [currentNode.prev, currentNode.next];
			currentNode = currentNode.prev;
		}

		return this;
	}

	clear() {
		this.head = null;
		this.tail = null;
		this._count = 0;
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

	* [Symbol.iterator]() {
		let currentNode = this.head;

		while (currentNode) {
			yield currentNode.value;
			currentNode = currentNode.next;
		}
	}

	private insertAtPosition(
		currentNode: Node<T> | null,
		newNode: Node<T>,
		toPosition: number,
	): void {
		let currentPosition = 0;

		while (currentNode && currentPosition < toPosition) {
			if (currentPosition + 1 === toPosition || !currentNode.next) {
				newNode.prev = currentNode;
				newNode.next = currentNode.next;

				if (currentNode.next) {
					currentNode.next.prev = newNode;
				} else {
					this.tail = newNode;
				}

				currentNode.next = newNode;
				break;
			}

			currentNode = currentNode.next;
			currentPosition++;
		}
	}

	private removeNode(value: T) {
		for (
			let currentNode = this.head;
			currentNode;
			currentNode = currentNode?.next ?? null
		) {
			if (currentNode.value !== value) continue;

			if (currentNode.prev) {
				currentNode.prev.next = currentNode.next;
			} else {
				this.head = currentNode.next;
			}

			if (currentNode.next) {
				currentNode.next.prev = currentNode.prev;
			} else {
				this.tail = currentNode.prev;
			}

			this._count--;
			return currentNode;
		}

		return null;
	}

	static from<From>(array: From[]) {
		const list = new DoublyLinkedList<From>();

		array.forEach((value) => {
			list.append(value);
		});

		return list;
	}
}

export default DoublyLinkedList;
