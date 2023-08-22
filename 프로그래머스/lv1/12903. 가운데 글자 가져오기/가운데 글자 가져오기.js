function solution(s) {
  const even = s[s.length / 2 - 1] + s[s.length / 2];
  const odd = s[Math.floor(s.length / 2)];
  // 홀수일 경우 - Math.floor[배열의 길이 / 2 ] 번째 글자 return
  // 짝수일 경우 - [배열의 길이 / 2] -1, [배열의 길이] return
  return s.length % 2 === 0 ? even : odd;
}