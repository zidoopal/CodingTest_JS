function solution(arr) {
  // arr의 원소를 모두 더할 sum 변수 선언 및 초기화
  // forEach() 메서드로 arr의 모든 원소를 돌면서 더해준 값 sum에 넣기
  // sum을 arr의 길이로 나눠주고 return
  let sum = 0;
  arr.forEach(item => sum += item)
  return sum/arr.length;
}