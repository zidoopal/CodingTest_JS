function solution(num_list) {
  // 메서드 없이 풀어보기
  ans = [];
  for (i = 1; i <= num_list.length; i++) {
    // num_list[num_list.length -1]씩 ans에 넣어서 return해주기
    ans.push(num_list[num_list.length - i]);
  }
  return ans;
}