function solution(n) {
  // 숫자를 모두 더해줄 sum 변수 선언 및 초기화
  let sum = 0;
  // n을 문자로 형 변환한 다음 split('') (ex. 123 > '123' > '1', '2', '3')
  // forEach() 메서드 사용,  모든 요소들을 돌면서 sum에 더해주기 (+더하기 연산자로 숫자로 형변환)
  String(n)
    .split('')
    .forEach((item) => (sum += +item));

  return sum;
}