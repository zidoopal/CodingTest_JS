function solution(arr1, arr2) {
  // 배열 ans 변수
  let ans = [[]];

  // for 반복문 사용, arr1의 길이만큼(== arr2) 반복
  for (let i = 0; i < arr1.length; i++) {
    //ans[i] 행에 빈 배열 생성, 값을 넣어줄 거임
    ans[i] = [];

    // 각 행의 열 길이 만큼 반복하기
    for (let j = 0; j < arr1[i].length; j++) {
      // 두 행렬의 같은 위치에 있는 원소들 더해서 ans에 push
      ans[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  // 릿헌
  return ans;
}