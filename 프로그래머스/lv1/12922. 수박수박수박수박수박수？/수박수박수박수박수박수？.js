function solution(n) {
  let ans = [];

  for (let i = 1; i <= n; i++) {
    i % 2 !== 0 ? ans.push('수') : ans.push('박');
  }
  // 홀일때 '수'
  // 짝일때 '박'
  return ans.join('');
}