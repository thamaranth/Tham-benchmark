const words = {
  A:9,
  B:2,
  C:2,
  D:4,
  E:12,
  F:2,
  G:3,
  H:2,
  I:9,
  J:1,
  K:1,
  L:4,
  M:2,
  N:6,
  O:8,
  P:2,
  Q:1,
  R:6,
  S:4,
  T:6,
  U:4,
  V:2,
  W:2,
  X:1,
  Y:2,
  Z:1,
  _:2
}

const decrement = str => {
  let splitStr = str.split('')

  for (let i = 0; i < splitStr.length; i++) {
    for (let key in words){
      if (splitStr[i] == key) {
        words[key]--
      }
    }
  }
  return words
}

const objPusher = obj => {

  let objToo = []
  for (let letter in obj){
    if (objToo.includes(obj[letter]) === false) {
      objToo.push(obj[letter] + ':' + letter)

    // if the 9 doesn't exist in objToo
      //let blah = letter.keys
      // ojbToo.letter = [blah]
    //else push letter to the existing num (example c)

    // for (let keyToo in obj){
    //   if (obj[key] == obj[keyToo]){
    //   objToo = obj[keyToo] + ':' + key
  //     }
  //   }
  }
  return objToo
}

console.log(decrement('AA'))
console.log(objPusher(decrement('AA')))
// console.log(Objlipper(decrement('AA')))










// const ObjFlipper = obj => {
//  return Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]})
// }
