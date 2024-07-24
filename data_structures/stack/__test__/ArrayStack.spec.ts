import ArrayStack from '../array-stack/ArrayStack';

describe('ArrayStack', () => {
	it('should work fine with array constructor', () => {
		const stack = ArrayStack.from([1, 2, 3], 3);

		expect(stack.toArray()).toEqual([1, 2, 3]);
	});

	it('should push and pop elements from the stack', () => {
		const stack = new ArrayStack<number>();

		stack.push(1);
		stack.push(2);
		stack.push(3);

		expect(stack.pop()).toBe(3);
		expect(stack.pop()).toBe(2);
		expect(stack.pop()).toBe(1);
		expect(stack.pop()).toBeNull();
	});

	it('should return correct value when checking if the stack is empty', () => {
		const stack = new ArrayStack<number>();

		expect(stack.isEmpty()).toBe(true);

		stack.push(1);

		expect(stack.isEmpty()).toBe(false);

		stack.pop();

		expect(stack.isEmpty()).toBe(true);
	});

	it('should return correct value when peeking at the top of the stack', () => {
		const stack = new ArrayStack<number>();

		expect(stack.peek()).toBeNull();

		stack.push(1);
		stack.push(2);
		stack.push(3);

		expect(stack.peek()).toBe(3);

		stack.pop();

		expect(stack.peek()).toBe(2);
	});

	it('should return null when popping from an empty stack', () => {
		const stack = new ArrayStack<number>();

		expect(stack.pop()).toBeNull();
	});

	it('should return null when peeking at the top of an empty stack', () => {
		const stack = new ArrayStack<number>();

		expect(stack.peek()).toBeNull();
	});
});
