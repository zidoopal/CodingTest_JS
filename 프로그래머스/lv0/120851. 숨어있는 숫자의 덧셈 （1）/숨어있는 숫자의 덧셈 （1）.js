function solution(my_string) {
  let ans = 0;
  for (i = 0; i < my_string.length; i++) {
    if (isNaN(my_string[i])) {
    } else ans += parseInt(my_string[i]);
  }
  return ans;
}