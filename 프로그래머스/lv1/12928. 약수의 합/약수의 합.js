function solution(n) {
  let ans = 0;
  let num = n;
  let idx = 1;
  while (idx <= num) {
    if (num % idx === 0) ans += idx;
    idx++;
  }
  return ans;
}