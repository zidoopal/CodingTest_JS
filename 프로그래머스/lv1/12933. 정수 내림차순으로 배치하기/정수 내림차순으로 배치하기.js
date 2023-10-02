function solution(n) {
  let str = n + '';
  let ans = str
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return Number(ans);
}
