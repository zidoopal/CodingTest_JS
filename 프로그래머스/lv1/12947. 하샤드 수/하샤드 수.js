function solution(x) {
  let a = 0;
  let s = (x + '').split('').map(Number);

  for (let i of s) {
    a += i;
  }

  return x % a == 0 ? true : false;
}
