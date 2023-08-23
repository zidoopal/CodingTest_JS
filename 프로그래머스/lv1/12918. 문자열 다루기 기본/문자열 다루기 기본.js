function solution(s) {
  // 정규식
  const regex = /^\d{4}$|^\d{6}$/;
  return regex.test(s);
}
