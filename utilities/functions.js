rangoSuma = (n) => {
  if(n <= 0) return 0
  return n+rangoSuma(n-1)
}
rangoSuma(0)