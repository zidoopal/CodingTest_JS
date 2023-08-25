// 수박수박수박
function solution(n) {
  var answer = '';
  var w = '수박';
  // answer에 수박 삽입
  for (let i = 0; i < Math.floor(n / 2); i++) answer += w;
  // 만약 n이 홀수면 마지막 인자 제외한 값을 answer에 삽입
  if (n % 2 == 1) answer += '수';
  return answer;
}