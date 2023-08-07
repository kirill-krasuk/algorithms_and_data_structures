type Edge<T = number> = [T, T];
type Graph<T = number> = Edge<T>[];

type GraphMatrix = number[][];
type GraphList<T extends string | number = number> = Record<T, T[]>;

export {
	Edge, Graph, GraphMatrix, GraphList,
};
