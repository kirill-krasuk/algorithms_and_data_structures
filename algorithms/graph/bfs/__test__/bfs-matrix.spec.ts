import BFSMatrix from '../bfs-matrix';

describe('Breadth-first search on adjacency matrix', () => {
	it('should return a set containing the start vertex when given a graph with only one vertex', () => {
		// Arrange
		const graph = [[0]];
		const start = 0;

		// Act
		const result = BFSMatrix(graph, start);

		// Assert
		expect(result).toEqual(new Set([start]));
	});

	it('should return a set containing all vertices when given a fully connected graph', () => {
		// Arrange
		const graph = [
			[0, 1, 1],
			[1, 0, 1],
			[1, 1, 0],
		];
		const start = 0;

		// Act
		const result = BFSMatrix(graph, start);

		// Assert
		expect(result).toEqual(new Set([0, 1, 2]));
	});

	it('should return a set containing only the vertices reachable from the start vertex', () => {
		// Arrange
		const graph = [
			[0, 1, 0, 0],
			[1, 0, 1, 0],
			[0, 1, 0, 1],
			[0, 0, 1, 0],
		];
		const start = 0;

		// Act
		const result = BFSMatrix(graph, start);

		// Assert
		expect(result).toEqual(new Set([0, 1, 2, 3]));
	});

	it('should handle a start vertex that is not in the graph', () => {
		// Arrange
		const graph = [
			[0, 1, 0],
			[1, 0, 1],
			[0, 1, 0],
		];
		const start = 3;

		// Act
		const result = BFSMatrix(graph, start);

		// Assert
		expect(result).toEqual(new Set());
	});

	it('should handle a graph with disconnected vertices', () => {
		// Arrange
		const graph = [
			[0, 1, 0],
			[1, 0, 0],
			[0, 0, 0],
		];
		const start = 0;

		// Act
		const result = BFSMatrix(graph, start);

		// Assert
		expect(result).toEqual(new Set([0, 1]));
	});
});
