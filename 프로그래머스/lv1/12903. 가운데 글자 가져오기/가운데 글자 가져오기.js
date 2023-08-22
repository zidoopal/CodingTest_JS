function solution(s) {
  let answer = '';
  let idx = s.length / 2;
  // idx 값이 정수 === true이면 answer에 s[idx-1] + s[idx]
  if (Number.isInteger(idx)) answer = s[idx - 1] + s[idx];
  // 아니면 실수 값을 내림
  else answer = s[Math.floor(idx)];
  return answer;
}