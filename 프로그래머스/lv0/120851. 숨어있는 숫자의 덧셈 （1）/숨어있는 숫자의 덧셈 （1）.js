function solution(my_string) {
  let ans = 0;
  // 바로 Number, parseInt 사용 못함, 문자로 시작하면 둘다 NaN 반환해버림
  my_string.split('').filter((item) => +item).forEach((num)=> ans+=(+num)) // 숫자만 배열로 반환 후 다 더해
  return ans;
}