import moment from 'moment'
import times from '../extras/times'

function date(arr) {
  let i = 0
  const regex = /(\w+)[\#](\w+)[\#](\w+)/ig
  const regexStar = /(\w+)\*(\w+)\*(\w+)/ig
  while ( i < 1000) {
    let starKiller = arr[i].replace(regexStar,'$3 $2 $1')
    let pounds = arr[i].replace(regex,'$2 $1 $3' )
    let badPounds = arr[i].replace(regex,'20$2 $1 $3')

    if (arr[i] == arr[i].match(regexStar)) {
        arr[i] = moment(starKiller).format('YYYY-MM-DD')
    } else if (arr[i] == arr[i].match(regex) && moment(arr[i]) == '') {
      arr[i] = moment(pounds).format('YYYY-MM-DD')
    } else if (arr[i] == arr[i].match(regex)) {
      arr[i] = moment(badPounds).format('YYYY-MM-DD')
    } else {
      arr[i] = moment(arr[i]).format('YYYY-MM-DD')
    }
    i++
  }
  return arr
}
// const newTime = '12#16#08'
// const regex = /(\w+)[\#](\w+)[\#](\w+)/ig
// let badPounds = newTime.replace(regex,'20$2 $1 $3')

console.log(date(times))
