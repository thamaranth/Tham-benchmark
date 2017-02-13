function shuffle(str) {

  let split = str.split('')
  let counter = split.length
  for(let i = counter - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * (i + 1))
    let temp = split[i]
    split[i] = split[index]
    split[index] = temp
  }
  return split.join('')
}

function logEach(array) {
  for (let i = 0; i < array.length; i++)
    console.log(array[i])
}

function factorial(n) {
  if (n < 0){
    return null
  } else if (n === 1) {
    return n
  } else {
    return n * factorial(n-1)
  }
  return n
}

function pushArray(array) {
  let newArray = []
  let split = array[0].split('')
  let arrFactorial = factorial(split.length)
      if (newArray.length == arrFactorial){
        return newArray
      } else {
          if (newArray.includes(array) == false ) {
            newArray.push(array)
            return pushArray(shuffle(array))
          } else {
            return pushArray(shuffle(array))
          }
      }
}
let array = (['fives'])
let split = array[0].split('')
console.log(factorial(split.length))
console.log(pushArray('to'))
