function solution(n) {
  let ans = '';

  for (let i = 1; i <= n; i++) {
    i % 2 !== 0 ? (ans += '수') : (ans += '박');
  }
  // 홀일때 '수'
  // 짝일때 '박'
  return ans;
}
