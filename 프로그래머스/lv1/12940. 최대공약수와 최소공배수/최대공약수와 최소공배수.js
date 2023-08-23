function solution(a, b) {
    var gcd = function(b, a) {
      var r = (b % a);
      return (r) ? gcd(a, r) : a;
    }
    return [gcd(b, a), ((b * a) / gcd(b, a))];
}