function solution(x) {
  let ans = 0;

  let str = x + '';
  str = str.split('').map(Number);
  for (let s of str) {
    ans += s;
  }
  return x % ans === 0 ? true : false;
}