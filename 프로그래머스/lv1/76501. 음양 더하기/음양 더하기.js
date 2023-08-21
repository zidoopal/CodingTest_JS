function solution(abs, signs) {
  let ans = 0;
  for (let i = 0; i < abs.length; i++) {
    signs[i] === true ? (ans += abs[i]) : (ans -= abs[i]);
  }
  return ans;
}