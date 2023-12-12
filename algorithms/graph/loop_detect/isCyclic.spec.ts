import isCyclic from './isCyclic';

describe('isCyclic', () => {
	it('should return false when given an empty graph', () => {
		const graph = new Map<number, number[]>();
		expect(isCyclic(graph)).toBe(false);
	});

	it('should return false when given a graph with a single node', () => {
		const graph = new Map<number, number[]>();
		graph.set(1, []);

		expect(isCyclic(graph)).toBe(false);
	});

	it('should return false when given a graph with no cycles', () => {
		const graph = new Map<number, number[]>();

		graph.set(1, [2]);
		graph.set(2, [3]);
		graph.set(3, []);

		expect(isCyclic(graph)).toBe(false);
	});

	it('should return false when given a graph with disconnected nodes', () => {
		const graph = new Map<number, number[]>();

		graph.set(1, []);
		graph.set(2, []);

		expect(isCyclic(graph)).toBe(false);
	});

	it('should return true when given a graph with a self-loop', () => {
		const graph = new Map<number, number[]>();

		graph.set(1, [1]);

		expect(isCyclic(graph)).toBe(true);
	});

	it('should return true when given a graph with a cycle of length 2', () => {
		const graph = new Map<number, number[]>();

		graph.set(1, [2]);
		graph.set(2, [1]);

		expect(isCyclic(graph)).toBe(true);
	});

	it('should return true when given a graph with a cycle of length 3', () => {
		const graph = new Map<number, number[]>();

		graph.set(1, [2]);
		graph.set(2, [3]);
		graph.set(3, [1]);

		expect(isCyclic(graph)).toBe(true);
	});

	it('should return true when given a graph with multiple cycles', () => {
		const graph = new Map<number, number[]>();

		graph.set(1, [2]);
		graph.set(2, [3]);
		graph.set(3, [1]);
		graph.set(4, [5]);
		graph.set(5, [4]);

		expect(isCyclic(graph)).toBe(true);
	});
});
