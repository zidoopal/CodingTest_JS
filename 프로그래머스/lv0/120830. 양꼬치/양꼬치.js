// 양꼬치 10인분 - 음료수 하나 서비스 >_ㅇ
// 1인분 12,000, 음료수 1개 2,000
// 양꼬치 n인분 음료수 k인분 총 얼마?

function solution(n, k) {
  return n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
}

// 서비스 받은 음료수 개수는 10인분 당 1개,  n에서 10 나눈 몫
