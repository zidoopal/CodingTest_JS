function solution(abs, signs) {
  let ans = 0;
  for (let i = 0; i < abs.length; i++) {
    let sign = signs[i] === true ? 1 : -1;
    ans += abs[i] * sign;
  }
  return ans;
}