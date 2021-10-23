import ('./')
rangoSuma = (n) => {
  if(n <= 0) return 0
  return n+rangoSuma(n-1)
}
console.log(rangoSuma(4))