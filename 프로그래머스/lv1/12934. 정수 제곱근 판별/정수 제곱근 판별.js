function solution(n) {
  let sqrt = Math.sqrt(n);
  // n이 양의 정수 x의 제곱 ? (x + 1)^2  :  -1
  // 전자의 경우 x 가 n의 제곱근이라는 소리네
  return sqrt % 1 == 0 ? Math.pow(sqrt + 1,2) : -1;
}
