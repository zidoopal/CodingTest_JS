function solution(n) {
  let sum = 0;
  // n을 나눴을 때 나머지가 0이 되는 수 모두 배열에 담고 이거 다 더한 수 return  하기
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}
