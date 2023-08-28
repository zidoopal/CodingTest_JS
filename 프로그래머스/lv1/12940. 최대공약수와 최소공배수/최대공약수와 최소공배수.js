function solution(n, m) {
  const gcd = (m, n) => {
    const r = m % n;
    return r ? gcd(n, r) : n;
  };
  return [gcd(m, n), (m * n) / gcd(m, n)];
}