function solution(n) {
  // 홀일때 '수'
  // 짝일때 '박'
  return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
}
