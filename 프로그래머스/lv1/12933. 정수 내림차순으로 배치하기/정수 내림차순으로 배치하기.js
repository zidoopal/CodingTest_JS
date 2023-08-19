function solution(n) {
  // n을 문자로 형변환 한 후 , split('')으로 쪼개준다
  // sort로 정렬해 주면서  > join > 숫자로 다시 형변환
  let ans = String(n)
    .split('')
    .sort((a, b) => Math.abs(b) -Math.abs(a))
    .join('');
  return +ans;
}