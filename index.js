function Add(string){
  if(string.replaceAll(' ','').length ==0){
    return 0
  }
  string = string.replaceAll(' ', '').split(',')

  let sum = 0
  let countOfNums = 0
  const negatives = []
  for (let i of string) {
    if(i == '')continue;
    let num = parseInt(i)
    if(i != '' && Number.isNaN(num)){
      throw new Error("only accepts numbers")
    }

    countOfNums++
    if(countOfNums > 2){
      throw new Error("only supports up to 2 numbers")
    }

    if(i.includes('-')){
      negatives.push(i)
    }

    sum += num
  }
  if(negatives.length > 0){
    throw new Error(`negatives not allowed: ${negatives.join(',')}`)
  }
  return sum
}


let a = ['-1', '-2', '-3']

console.log(a.join(','))

export default Add