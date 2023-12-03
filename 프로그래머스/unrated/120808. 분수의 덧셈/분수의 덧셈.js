const solution = (denum1, num1, denum2, num2) => {
    const GCD = (num1, num2) => (num2 > 0 ? GCD(num2, num1 % num2) : num1);
    const denum  =  denum1 *num2 + denum2*num1
    const num = num1*num2
    const gcd = GCD(denum,num);
    const answer = [denum,num].map(v=>v/gcd);
    return answer;
}