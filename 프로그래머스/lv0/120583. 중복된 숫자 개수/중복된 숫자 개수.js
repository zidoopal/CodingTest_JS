function solution(array, n) {
  // array를 for문으로 돌면서 n과 같은지 비교, 같으면 배열에 담고 배열의 길이 return하기
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) ans.push(array[i])
  }
  return ans.length;
}
