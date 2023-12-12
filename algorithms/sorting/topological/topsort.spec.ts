import topologicalSort, { Graph } from '.';

describe('Topological sort', () => {
	it('should return a sorted list of vertices in a directed acyclic graph', () => {
		const graph: Graph = {
			A: ['B', 'C'],
			B: ['D'],
			C: ['D'],
			D: [],
		};

		const result = topologicalSort(graph);

		expect(result).toEqual(['A', 'C', 'B', 'D']);
	});

	it('should handle a graph with a single vertex', () => {
		const graph: Graph = {
			A: [],
		};

		const result = topologicalSort(graph);

		expect(result).toEqual(['A']);
	});

	it('should handle an empty graph', () => {
		const graph: Graph = {};

		const result = topologicalSort(graph);

		expect(result).toEqual([]);
	});

	it('should handle a graph with duplicate edges', () => {
		const graph: Graph = {
			A: ['B', 'B'],
			B: ['C', 'C'],
			C: [],
		};

		const result = topologicalSort(graph);

		expect(result).toEqual(['A', 'B', 'C']);
	});

	it('should handle a graph with multiple disconnected components', () => {
		const graph: Graph = {
			A: ['B'],
			B: ['C'],
			C: [],
			D: ['E'],
			E: ['F'],
			F: [],
		};

		const result = topologicalSort(graph);

		expect(result).toEqual(['D', 'E', 'F', 'A', 'B', 'C']);
	});

	it('should handle a graph with multiple valid topological orderings', () => {
		const graph: Graph = {
			A: ['B', 'C'],
			B: [],
			C: [],
		};

		const result = topologicalSort(graph);

		expect(result).toEqual(['A', 'C', 'B']);
	});
});
