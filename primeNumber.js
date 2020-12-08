function isPrime(num) {
  //TODO
  let prime = true
  if(num <=1) return false
  for(let i=2; i<Math.sqrt(num); i++){
    if(num%i === 0 && num!==i){
      prime = false
      break
    }
  }
  if(num%1 === 0 && num%num === 0 && prime) return true
  else return false
}