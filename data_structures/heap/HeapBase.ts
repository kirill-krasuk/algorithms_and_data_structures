const baseValueExtractor = (value: unknown): number => {
	if (typeof value === 'number') {
		return value;
	}

	throw new Error('Value must be a number or an object with a priority property');
};

abstract class Heap<T> {
	// public только ради тестов
	public heap: T[] = [];
	protected abstract extremumValue: number;

	constructor(protected valueExtractor: (value: T) => number = baseValueExtractor) {}

	protected getParentIndex(index: number): number {
		return Math.floor((index - 1) / 2);
	}

	protected getLeftChildIndex(index: number): number {
		return 2 * index + 1;
	}

	protected getRightChildIndex(index: number): number {
		return 2 * index + 2;
	}

	protected swap(index1: number, index2: number): void {
		[this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
	}

	protected abstract compare(i: number, j: number): boolean;

	/**
	 * SiftUp - это процесс перемещения элемента вверх по дереву.
	 * Этот процесс используется для восстановления свойств кучи после добавления нового элемента.
	 */
	protected siftUp(index: number): void {
		let parentIndex = this.getParentIndex(index);

		while (index > 0 && this.compare(parentIndex, index)) {
			this.swap(parentIndex, index);
			index = parentIndex;
			parentIndex = this.getParentIndex(index);
		}
	}

	/**
	 * SiftDown - это процесс перемещения элемента вниз по дереву.
	 * Этот процесс используется для восстановления свойств кучи после удаления корневого элемента.
	 */
	protected siftDown(index: number): void {
		/**
		 * extremumIndex - это индекс элемента, который должен быть перемещен вверх.
		 * extremum - в переводе с латинского - крайний.
		 */
		let extremumIndex = index;
		const leftChildIndex = this.getLeftChildIndex(index);
		const rightChildIndex = this.getRightChildIndex(index);

		if (
			leftChildIndex < this.heap.length
			&& this.compare(extremumIndex, leftChildIndex)
		) {
			extremumIndex = leftChildIndex;
		}

		if (
			rightChildIndex < this.heap.length
			&& this.compare(extremumIndex, rightChildIndex)
		) {
			extremumIndex = rightChildIndex;
		}

		/**
		 * Если индекс элемента, который должен быть перемещен вверх, не равен исходному индексу,
		 * то происходит обмен элементов и вызов siftDown для нового индекса.
		 */
		if (index !== extremumIndex) {
			this.swap(index, extremumIndex);
			this.siftDown(extremumIndex);
		}
	}

	/**
	 * Insert - это метод для добавления нового элемента в кучу.
	 * Сначала элемент добавляется в конец кучи, затем вызывается
	 * siftUp для восстановления свойств кучи.
	 */
	insert(value: T): void {
		this.heap.push(value);
		this.siftUp(this.heap.length - 1);
	}

	/**
	 * Extract - это метод для извлечения корневого элемента из кучи.
	 * Сначала корневой элемент извлекается, затем последний элемент
	 * кучи становится корневым и вызывается siftDown для восстановления
	 * свойств кучи.
	 */
	extract(): T | undefined {
		if (this.heap.length === 0) {
			return undefined;
		}

		if (this.heap.length === 1) {
			return this.heap.pop();
		}

		const extremum = this.heap[0];
		this.heap[0] = this.heap.pop() as T;
		this.siftDown(0);
		return extremum;
	}

	delete(index: number): void {
		this.heap[index] = this.extremumValue as T;
		this.siftUp(index);
		this.extract();
	}

	getTop(): T | undefined {
		return this.heap[0];
	}

	isEmpty(): boolean {
		return this.heap.length === 0;
	}

	getLength(): number {
		return this.heap.length;
	}
}

export default Heap;
