function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    // 제곱근이 정수면 약수의 갯수는 홀수
    Number.isInteger(Math.sqrt(i)) ? (sum -= i) : (sum += i);
  }
  return sum;
}