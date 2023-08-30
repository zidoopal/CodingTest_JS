function solution(n) {
  let ans = [];
  let str = n + '';
  ans = str
    .split('')
    .reverse()
    .map((a) => +a);

  return ans;
}