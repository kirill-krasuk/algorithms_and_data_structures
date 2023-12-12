import createAdjacencyList from '../createAdjacencyList';
import { Graph } from '../types';

describe('createAdjacencyList', () => {
	it('should create an adjacency list for a non-oriented graph with multiple edges', () => {
		const graph: Graph = [
			[0, 1],
			[1, 2],
			[2, 0],
		];

		const result = createAdjacencyList(graph, false);

		expect(result).toEqual({
			0: [1, 2],
			1: [0, 2],
			2: [1, 0],
		});
	});

	it('should create an adjacency list for a non-oriented graph with a single edge', () => {
		const graph: Graph = [[0, 1]];
		const result = createAdjacencyList(graph, false);

		expect(result).toEqual({
			0: [1],
			1: [0],
		});
	});

	it('should handle an empty input graph', () => {
		const graph: Graph = [];
		const result = createAdjacencyList(graph);
		expect(result).toEqual({});
	});
});
