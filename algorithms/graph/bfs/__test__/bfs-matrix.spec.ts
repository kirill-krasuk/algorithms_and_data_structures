import BFSMatrix from '../bfs-matrix';

describe('Breadth-first search on adjacency matrix', () => {
	it('should return a set containing the start vertex when given a graph with only one vertex', () => {
		const graph = [[0]];

		const start = 0;
		const result = BFSMatrix(graph, start);

		expect(result).toEqual(new Set([start]));
	});

	it('should return a set containing all vertices when given a fully connected graph', () => {
		const graph = [
			[0, 1, 1],
			[1, 0, 1],
			[1, 1, 0],
		];

		const start = 0;
		const result = BFSMatrix(graph, start);

		expect(result).toEqual(new Set([0, 1, 2]));
	});

	it('should return a set containing only the vertices reachable from the start vertex', () => {
		const graph = [
			[0, 1, 0, 0],
			[1, 0, 1, 0],
			[0, 1, 0, 1],
			[0, 0, 1, 0],
		];

		const start = 0;
		const result = BFSMatrix(graph, start);

		expect(result).toEqual(new Set([0, 1, 2, 3]));
	});

	it('should handle a start vertex that is not in the graph', () => {
		const graph = [
			[0, 1, 0],
			[1, 0, 1],
			[0, 1, 0],
		];

		const start = 3;
		const result = BFSMatrix(graph, start);

		expect(result).toEqual(new Set());
	});

	it('should handle a graph with disconnected vertices', () => {
		const graph = [
			[0, 1, 0],
			[1, 0, 0],
			[0, 0, 0],
		];

		const start = 0;
		const result = BFSMatrix(graph, start);

		expect(result).toEqual(new Set([0, 1]));
	});
});
