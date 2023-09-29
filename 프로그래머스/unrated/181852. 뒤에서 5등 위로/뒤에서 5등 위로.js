function solution(num_list) {
  let ans = [];
  ans = num_list.sort((a, b) => a - b);
  return ans.slice(5);
}