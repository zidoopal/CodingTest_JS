function solution(n) {
  let ans  = 0;
  let cnt = 0;
  for (let i=0; i <=6; i++) {
    if(n < Math.pow(10, i)) {
    cnt =i;
    break;
  }
}
  for (let i =0; i <cnt; i++) {
    ans += n % 10;
    n = Math.floor(n / 10);
    // 난 그런거 몰러유 몰러몰러몰러유
  }
return ans;
}