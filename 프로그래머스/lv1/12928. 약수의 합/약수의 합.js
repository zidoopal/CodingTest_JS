function solution(n) {
  // 약수를 모두  더한 값을 넣어줄(누적 할) sum 변수 선언 및 초기화
  let sum = 0;
  // for반복문 사용, n의 제곱근의 범위 만큼 반복해주기
  for (let i = 1; i <= Math.sqrt(n); i++) {
    // n을 i로 나눴을 때 나머지가 0일 경우 sum에 더해주기
    if (n % i === 0) {
      sum += i;
      // 중복 약수 방지
      // ( ex. n이 16일 때,  i = 4, 16 / 4 == 4 성립, sum에 두번 추가 되지 않도록 조건문 추가)
      if (i !== n / i) {
        sum += n / i;
      }
    }
  }
  return sum;
}