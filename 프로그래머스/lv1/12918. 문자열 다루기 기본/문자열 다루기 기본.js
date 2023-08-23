
function solution(s) {
  // s.length가 4 or 6 && typeof(s) == number 확인해주는 함수 만들기 >> 정규식 사용하기
  const regex = /^\d{4}$|^\d{6}$/;
  // (정규표현식).test("문자열")
  // "문자열"이 "정규표현식"과 매칭되면 true, 아니면 false반환
  return regex.test(s);
}