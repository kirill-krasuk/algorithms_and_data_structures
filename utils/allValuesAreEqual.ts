function allValuesAreEqual(arr: number[]) {
	return arr.every((value, _, src) => value === src[0]);
}

export default allValuesAreEqual;
