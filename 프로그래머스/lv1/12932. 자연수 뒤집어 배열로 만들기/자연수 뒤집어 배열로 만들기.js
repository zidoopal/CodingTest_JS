function solution(n) {
  // ans 배열 선언 및 초기화
  let ans = [];
  // 숫자 n을 문자로 형변환
  // split('')으로 쪼개주기
  // map()메서드로 문자>숫자로 형변환 시켜주기
  // reverse() 메서드를 사용하여 뒤집어주기 > 이후 ans return
  ans = String(n)
    .split('')
    .map((item) => +item)
    .reverse();
  return ans;
}