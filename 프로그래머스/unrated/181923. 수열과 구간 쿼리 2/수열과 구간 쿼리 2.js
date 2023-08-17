function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    const a = arr.slice(s, e + 1).sort((a, b) => a - b);
    for (i of a) {
      if (i > k) return i;
    }
    return -1;
  });
}