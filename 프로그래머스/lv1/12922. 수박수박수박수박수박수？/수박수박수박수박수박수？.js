function solution(n) {
  // n이 홀수일 때 수/박/ 짝수일때 수박

  // n을 2로 나눠 주고 나머지가 있으면 '수' 를 더해주기
  return '수박'.repeat(n / 2) + (n % 2 ? '수' : '');
}