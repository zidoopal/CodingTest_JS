function solution(array, n) {
  let ans = 0;
  ans = array.filter((a) => a === n);
  return ans.length;
}