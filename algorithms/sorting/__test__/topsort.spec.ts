import topologicalSort, { Graph } from '../topological';

describe('Topological sort', () => {
	it('should return a sorted list of vertices in a directed acyclic graph', () => {
		// Arrange
		const graph: Graph = {
			A: ['B', 'C'],
			B: ['D'],
			C: ['D'],
			D: [],
		};
		const expected = ['A', 'C', 'B', 'D'];

		// Act
		const result = topologicalSort(graph);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should handle a graph with a single vertex', () => {
		// Arrange
		const graph: Graph = {
			A: [],
		};
		const expected = ['A'];

		// Act
		const result = topologicalSort(graph);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should handle an empty graph', () => {
		// Arrange
		const graph: Graph = {};

		// Act
		const result = topologicalSort(graph);

		// Assert
		expect(result).toEqual([]);
	});

	it('should handle a graph with duplicate edges', () => {
		// Arrange
		const graph: Graph = {
			A: ['B', 'B'],
			B: ['C', 'C'],
			C: [],
		};
		const expected = ['A', 'B', 'C'];

		// Act
		const result = topologicalSort(graph);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should handle a graph with multiple disconnected components', () => {
		// Arrange
		const graph: Graph = {
			A: ['B'],
			B: ['C'],
			C: [],
			D: ['E'],
			E: ['F'],
			F: [],
		};
		const expected = ['D', 'E', 'F', 'A', 'B', 'C'];

		// Act
		const result = topologicalSort(graph);

		// Assert
		expect(result).toEqual(expected);
	});

	it('should handle a graph with multiple valid topological orderings', () => {
		// Arrange
		const graph: Graph = {
			A: ['B', 'C'],
			B: [],
			C: [],
		};
		const expected = ['A', 'C', 'B'];

		// Act
		const result = topologicalSort(graph);

		// Assert
		expect(result).toEqual(expected);
	});
});
