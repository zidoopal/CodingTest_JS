function solution(seoul) {
  //indexOf() 사용하기
  const indexOfKim = seoul.indexOf('Kim');

  return `김서방은 ${indexOfKim}에 있다`;
}

console.log(solution(['Jane', 'Kim']));