function solution(left, right) {
    let sum = 0;
    
    for (let i = left; i <= right; i++) {
        let cnt = 0;  
        
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cnt++;  
            }
        }
        
        if (cnt % 2) {
            sum -= i;  // 약수 갯수가 홀수면 sum에서 뺌
        } else {
            sum += i;  // 약수 갯수가 짝수면 sum에 더함
        }
    }
    
    return sum;
}