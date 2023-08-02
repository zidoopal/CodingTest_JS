function solution(my_string) {
  let ans = '';
  for (let i = 1; i <= my_string.length; i++) {
    ans += my_string[my_string.length - i];
  }
  return ans;
}