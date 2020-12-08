function solution(number){
  let mult = []
  if(number <= 0) return 0
  
  for(i=number-1; i>0; i--){
    if(Number.isInteger(i/3) || Number.isInteger(i/5)){
      mult.push(i)
    }
  }
  sum = 0
  for (i=0; i<mult.length; i++){
    sum = sum + mult[i]
  }
  return console.log(sum)
}

solution(10)