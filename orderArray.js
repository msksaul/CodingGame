function sumTwoSmallestNumbers(numbers) {
  let ordered = []
  let inserted
  for(i=0; i<numbers.length; i++) {
    inserted = false
    for(j=0; j<ordered.length; j++) {
      if(numbers[i]<ordered[j]){
        inserted = true
        ordered.splice(j,0,numbers[i])
        break
      }
    }
    if(!inserted){
    ordered.push(numbers[i])
    }
  }
  return ordered
}