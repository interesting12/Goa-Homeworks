function rounding(n, m) {
  let r = n % m;
  if (r === 0) {
    return n;
  }
  if (r === m - r) {
    return n;
  }
  if (r < m - r) {
    return n - r;
  } else {
    return n + (m - r);
  }
  
  
}