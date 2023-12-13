import isCyclic from './isCyclic';

describe('isCyclic', () => {
	it('should return false when given an empty graph', () => {
		// Arrange
		const graph = new Map<number, number[]>();

		// Act
		const result = isCyclic(graph);

		// Assert
		expect(result).toBe(false);
	});

	it('should return false when given a graph with a single node', () => {
		// Arrange
		const graph = new Map<number, number[]>();
		graph.set(1, []);

		// Act
		const result = isCyclic(graph);

		// Assert
		expect(result).toBe(false);
	});

	it('should return false when given a graph with no cycles', () => {
		// Arrange
		const graph = new Map<number, number[]>();
		graph.set(1, [2]);
		graph.set(2, [3]);
		graph.set(3, []);

		// Act
		const result = isCyclic(graph);

		// Assert
		expect(result).toBe(false);
	});

	it('should return false when given a graph with disconnected nodes', () => {
		// Arrange
		const graph = new Map<number, number[]>();
		graph.set(1, []);
		graph.set(2, []);

		// Act
		const result = isCyclic(graph);

		// Assert
		expect(result).toBe(false);
	});

	it('should return true when given a graph with a self-loop', () => {
		// Arrange
		const graph = new Map<number, number[]>();
		graph.set(1, [1]);

		// Act
		const result = isCyclic(graph);

		// Assert
		expect(result).toBe(true);
	});

	it('should return true when given a graph with a cycle of length 2', () => {
		// Arrange
		const graph = new Map<number, number[]>();
		graph.set(1, [2]);
		graph.set(2, [1]);

		// Act
		const result = isCyclic(graph);

		// Assert
		expect(result).toBe(true);
	});

	it('should return true when given a graph with a cycle of length 3', () => {
		// Arrange
		const graph = new Map<number, number[]>();
		graph.set(1, [2]);
		graph.set(2, [3]);
		graph.set(3, [1]);

		// Act
		const result = isCyclic(graph);

		// Assert
		expect(result).toBe(true);
	});

	it('should return true when given a graph with multiple cycles', () => {
		// Arrange
		const graph = new Map<number, number[]>();
		graph.set(1, [2]);
		graph.set(2, [3]);
		graph.set(3, [1]);
		graph.set(4, [5]);
		graph.set(5, [4]);

		// Act
		const result = isCyclic(graph);

		// Assert
		expect(result).toBe(true);
	});
});
