function solution(n) {
  let ans = 0;
  // n이 양의 정수 x의 제곱 ? x+1 **2 : -1;
  let sqrt = Math.sqrt(n);
  ans = Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;

  return ans;
}
