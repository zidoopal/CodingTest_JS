function solution(n) {
  // 정수 n 이하 모든 짝수 더하기
  let ans = 0;
  for (let i = 2; i <= n; i += 2) {
    ans += i;
  }
  return ans;
}