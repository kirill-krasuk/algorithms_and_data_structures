function isCyclic(graph: Map<number, number[]>): boolean {
	const visited = new Set<number>();
	const recStack = new Set<number>();

	for (const node of graph.keys()) {
		if (dfs(node, visited, recStack, graph)) {
			return true;
		}
	}

	return false;
}

function dfs(
	node: number,
	visited: Set<number>,
	recStack: Set<number>,
	graph: Map<number, number[]>,
): boolean {
	if (recStack.has(node)) {
		return true;
	}

	if (visited.has(node)) {
		return false;
	}

	visited.add(node);
	recStack.add(node);

	const neighbors = graph.get(node) ?? [];

	for (const neighbor of neighbors) {
		if (dfs(neighbor, visited, recStack, graph)) {
			return true;
		}
	}

	recStack.delete(node);
	return false;
}

export default isCyclic;
