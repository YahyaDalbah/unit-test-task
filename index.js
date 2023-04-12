function Add(string){
  let sum = 0
  let countOfNums = 0
  for (let i of string) {
    let num = parseInt(i)
    if(Number.isNaN(num)){
      continue
    }

    countOfNums++
    if(countOfNums > 2){
      return "only supports up to 2 numbers"
    }

    sum += num
  }
  return sum
}

export default Add

let st = ""

for (let i of st) {
  let num = parseInt(i)
  if(Number.isNaN(num)){
    continue
  }
  console.log(num)
}