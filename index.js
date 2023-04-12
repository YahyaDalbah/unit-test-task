function Add(string){
  let sum = 0
  for (let i of string) {
    let num = parseInt(i)
    if(Number.isNaN(num)){
      continue
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