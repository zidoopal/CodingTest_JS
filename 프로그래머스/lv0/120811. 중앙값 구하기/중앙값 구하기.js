function solution(array) {
  let num = Math.floor(array.length / 2)
  // array배열을 오름차순으로 정렬
  array.sort((a,b)=>a-b)
  return array[num]
}