function solution(array) {
  // (1) array.sort((a, b) => a - b); // 오름차순 정렬
  // (2) [Math.floor(array.length / 2)] // array 길이 / 2  의 몫== 중앙값
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}